var
  extend   = require('extend'),
  fs       = require('fs'),
  path     = require('path'),
  defaults = require('../defaults')
;
module.exports = {
  getPath: function(file, directory) {
    var
      configPath,
      walk = function(directory) {
        var
          nextDirectory = path.resolve( path.join(directory, path.sep, '..') ),
          currentPath   = path.normalize( path.join(directory, file) )
        ;
        if( fs.existsSync(currentPath) ) {
          configPath = path.normalize(directory);
          return;
        }
        else {
          if(nextDirectory == directory) {
            return;
          }
          walk(nextDirectory, file);
        }
      }
    ;
    file      = file || defaults.files.config;
    directory = directory || path.join(__dirname, path.sep, '..');
    walk(directory);
    return configPath || '';
  },
  addDerivedValues: function(config) {
    config = config || extend(false, {}, defaults);
    var
      configPath = this.getPath(),
      sourcePaths = {},
      outputPaths = {},
      folder
    ;
    for(folder in config.paths.source) {
      if(config.paths.source.hasOwnProperty(folder)) {
        sourcePaths[folder] = path.resolve(path.join(configPath, config.base, config.paths.source[folder]));
      }
    }
    for(folder in config.paths.output) {
      if(config.paths.output.hasOwnProperty(folder)) {
        outputPaths[folder] = path.resolve(path.join(configPath, config.base, config.paths.output[folder]));
      }
    }
    config.paths.source = sourcePaths;
    config.paths.output = outputPaths;
    config.paths.clean = path.resolve( path.join(configPath, config.base, config.paths.clean) );
    config.paths.assets = {
      source       : '../../themes', 
      uncompressed : './' + path.relative(config.paths.output.uncompressed, config.paths.output.themes).replace(/\\/g, '/'),
      compressed   : './' + path.relative(config.paths.output.compressed, config.paths.output.themes).replace(/\\/g, '/'),
      packaged     : './' + path.relative(config.paths.output.packaged, config.paths.output.themes).replace(/\\/g, '/')
    };
    if(config.permission) {
      config.hasPermissions = true;
    }
    else {
      config.permission     = {};
      config.hasPermissions = false;
    }
    if(!config.globs) {
      config.globs = {};
    }
    if(config.components instanceof Array) {
      config.components = config.components.filter(function(component, index) {
        return config.components.indexOf(component) == index;
      });
    }
    config.globs.components = (typeof config.components == 'object')
      ? (config.components.length > 1)
        ? '{' + config.components.join(',') + '}'
        : config.components[0]
      : '{' + defaults.components.join(',') + '}'
    ;
    return config;
  }
};
