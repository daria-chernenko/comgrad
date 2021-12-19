var
  process = require('child_process'),
  release = require('../config/admin/release'),
  repos   = release.distributions.concat(release.components),
  total   = repos.length,
  index   = -1,
  stream,
  stepRepo
;
module.exports = function(callback) {
  console.log('Registering repos with package managers');
  stepRepo = function() {
    index = index + 1;
    if(index >= total) {
      callback();
      return;
    }
    var
      repo            = repos[index].toLowerCase(),
      outputDirectory = release.outputRoot + repo + '/',
      exec            = process.exec,
      execSettings    = {cwd: outputDirectory},
      updateNPM       = 'npm publish'
    ;
    exec(updateNPM, execSettings, function(err, stdout, stderr) {
      console.log(err, stdout, stderr);
      stepRepo();
    });
  };
  stepRepo();
};
