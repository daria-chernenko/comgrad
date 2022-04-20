var
  extend          = require('extend'),
  fs              = require('fs'),
  path            = require('path'),
  requireDotFile  = require('require-dot-file'),
  defaults        = require('./defaults'),
  config          = require('./project/config'),
  gulpConfig = {},
  userConfig
;
try {
  userConfig = requireDotFile('semantic.json');
}
catch(error) {
  if(error.code === 'MODULE_NOT_FOUND') {
    console.error('No semantic.json config found');
  }
}
gulpConfig = (!userConfig)
  ? extend(true, {}, defaults)
  : extend(false, {}, defaults, userConfig)
;
config.addDerivedValues(gulpConfig);
module.exports = gulpConfig;
