var
  gulp           = require('gulp'),
  console        = require('better-console'),
  fs             = require('fs'),
  path           = require('path'),
  git            = require('gulp-git'),
  githubAPI      = require('github'),
  requireDotFile = require('require-dot-file'),
  github         = require('../../config/admin/github.js'),
  release        = require('../../config/admin/release'),
  project        = require('../../config/project/release'),
  oAuth          = fs.existsSync(__dirname + '/../../config/admin/oauth.js')
    ? require('../../config/admin/oauth')
    : false,
  version = project.version
;
module.exports = function(callback) {
  var
    index = -1,
    total = release.distributions.length,
    timer,
    stream,
    stepRepo
  ;
  if(!oAuth) {
    console.error('Must add oauth token for GitHub in tasks/config/admin/oauth.js');
    return;
  }
  stepRepo = function() {
    index = index + 1;
    if(index >= total) {
      callback();
      return;
    }
    var
      distribution         = release.distributions[index],
      outputDirectory      = path.resolve(path.join(release.outputRoot, distribution.toLowerCase() )),
      repoName             = release.distRepoRoot + distribution,
      commitArgs = (oAuth.name !== undefined && oAuth.email !== undefined)
        ? '--author "' + oAuth.name + ' <' + oAuth.email + '>"'
        : '',
      distributionPackage = fs.existsSync(outputDirectory + 'package.json' )
        ? require(outputDirectory + 'package.json')
        : false,
      isNewVersion  = (version && distributionPackage.version != version),
      commitMessage = (isNewVersion)
        ? 'Updated distribution to version ' + version
        : 'Updated files from main repo',
      gitOptions      = { cwd: outputDirectory },
      commitOptions   = { args: commitArgs, cwd: outputDirectory },
      releaseOptions  = { tag_name: version, owner: release.org, repo: repoName },
      fileModeOptions = { args : 'config core.fileMode false', cwd: outputDirectory },
      usernameOptions = { args : 'config user.name "' + oAuth.name + '"', cwd: outputDirectory },
      emailOptions    = { args : 'config user.email "' + oAuth.email + '"', cwd: outputDirectory },
      versionOptions =  { args : 'rev-parse --verify HEAD', cwd: outputDirectory },
      localRepoSetup  = fs.existsSync(path.join(outputDirectory, '.git')),
      canProceed      = true
    ;
    console.info('Processing repository:' + outputDirectory);
    function setConfig() {
      git.exec(fileModeOptions, function() {
        git.exec(usernameOptions, function () {
          git.exec(emailOptions, function () {
            commitFiles();
          });
        });
      });
    }
    function commitFiles() {
      console.info('Committing ' + distribution + ' files', commitArgs);
      gulp.src('./', gitOptions)
        .pipe(git.add(gitOptions))
        .pipe(git.commit(commitMessage, commitOptions))
        .on('error', function(error) {
        })
        .on('finish', function(callback) {
          if(canProceed) {
            pushFiles();
          }
          else {
            console.info('Nothing new to commit');
            nextRepo();
          }
        })
      ;
    }
    function pushFiles() {
      console.info('Pushing files for ' + distribution);
      git.push('origin', 'master', { args: '', cwd: outputDirectory }, function(error) {
        console.info('Push completed successfully');
        getSHA();
      });
    }
    function getSHA() {
      git.exec(versionOptions, function(error, version) {
        version = version.trim();
        createRelease(version);
      });
    }
    function createRelease(version) {
      if(version) {
        releaseOptions.target_commitish = version;
      }
      github.repos.createRelease(releaseOptions, function() {
        nextRepo();
      });
    }
    function nextRepo() {
      console.log('Sleeping for 1 second...');
      global.clearTimeout(timer);
      timer = global.setTimeout(stepRepo, 500);
    }
    if(localRepoSetup) {
      setConfig();
    }
    else {
      console.error('Repository must be setup before running update distributions');
    }
  };
  stepRepo();
};
