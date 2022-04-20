var
  del    = require('del'),
  config = require('./config/user'),
  tasks  = require('./config/tasks')
;
module.exports = function(callback) {
  return del([config.paths.clean], tasks.settings.del, callback);
};
