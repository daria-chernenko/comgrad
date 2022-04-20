var
  runSequence = require('run-sequence')
;
module.exports = function(callback) {
  runSequence(
    'update distributions', 
    'update components', 
    callback
  );
};
