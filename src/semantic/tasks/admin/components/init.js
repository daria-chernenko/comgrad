var
  gulp      = require('gulp'),
  console   = require('better-console'),
  del       = require('del'),
  fs        = require('fs'),
  path      = require('path'),
  git       = require('gulp-git'),
  githubAPI = require('github'),
  mkdirp    = require('mkdirp'),
  github    = require('../../config/admin/github.js'),
  release   = require('../../config/admin/release'),
  project   = require('../../config/project/release'),
  oAuth     = fs.existsSync(__dirname + '/../../config/admin/oauth.js')
    ? require('../../config/admin/oauth')
    : false,
  version         = project.version
;
module.exports = function(callback) {
  var
    index = -1,
    total = release.components.length,
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
      component            = release.components[index],
      outputDirectory      = path.resolve(release.outputRoot + component),
      capitalizedComponent = component.charAt(0).toUpperCase() + component.slice(1),
      repoName             = release.componentRepoRoot + capitalizedComponent,
      gitOptions           = { cwd: outputDirectory },
      pullOptions          = { args: '-q', cwd: outputDirectory, quiet: true },
      resetOptions         = { args: '-q --hard', cwd: outputDirectory, quiet: true },
      gitURL               = 'https:
      repoURL              = 'https:
      localRepoSetup       = fs.existsSync(path.join(outputDirectory, '.git'))
    ;
    console.log('Processing repository: ' + outputDirectory);
    if( !fs.existsSync(outputDirectory) ) {
      mkdirp.sync(outputDirectory);
    }
    if(release.outputRoot.search('../repos') == 0) {
      console.info('Cleaning dir', outputDirectory);
      del.sync([outputDirectory + '**/*'], {silent: true, force: true});
    }
    function setupRepo() {
      if(localRepoSetup) {
        addRemote();
      }
      else {
        initRepo();
      }
    }
    function initRepo() {
      console.info('Initializing repository for ' + component);
      git.init(gitOptions, function(error) {
        if(error) {
          console.error('Error initializing repo', error);
        }
        addRemote();
      });
    }
    function createRepo() {
      console.info('Creating GitHub repo ' + repoURL);
      github.repos.createFromOrg({
        org      : release.org,
        name     : repoName,
        homepage : release.homepage
      }, function() {
        setupRepo();
      });
    }
    function addRemote() {
      console.info('Adding remote origin as ' + gitURL);
      git.addRemote('origin', gitURL, gitOptions, function(){
        pullFiles();
      });
    }
    function pullFiles() {
      console.info('Pulling ' + component + ' files');
      git.pull('origin', 'master', pullOptions, function(error) {
        resetFiles();
      });
    }
    function resetFiles() {
      console.info('Resetting files to head');
      git.reset('HEAD', resetOptions, function(error) {
        nextRepo();
      });
    }
    function nextRepo() {
      global.clearTimeout(timer);
      timer = global.setTimeout(function() {
        stepRepo()
      }, 0);
    }
    if(localRepoSetup) {
      pullFiles();
    }
    else {
      setupRepo();
    }
  };
  stepRepo();
};
