var
  runSequence = require('run-sequence')
;
module.exports = function(callback) {
  runSequence(
    'init distributions', 
    'create distributions', 
    'init components', 
    'create components', 
    callback
  );
};
