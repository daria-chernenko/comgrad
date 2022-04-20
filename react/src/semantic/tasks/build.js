var
  gulp         = require('gulp-help')(require('gulp')),
  runSequence  = require('run-sequence'),
  config       = require('./config/user'),
  install      = require('./config/project/install'),
  tasks        = []
;
if(config.rtl) {
  require('./collections/rtl')(gulp);
}
require('./collections/build')(gulp);
module.exports = function(callback) {
  console.info('Building Semantic');
  if( !install.isSetup() ) {
    console.error('Cannot find semantic.json. Run "gulp install" to set-up Semantic');
    return 1;
  }
  if(config.rtl === true || config.rtl === 'Yes') {
    gulp.start('build-rtl');
    return;
  }
  if(config.rtl == 'both') {
    tasks.push('build-rtl');
  }
  tasks.push('build-javascript');
  tasks.push('build-css');
  tasks.push('build-assets');
  runSequence(tasks, callback);
};
