var
  console = require('better-console'),
  config  = require('./user'),
  release = require('./project/release')
;
module.exports = {
  banner : release.banner,
  log: {
    created: function(file) {
      return 'Created: ' + file;
    },
    modified: function(file) {
      return 'Modified: ' + file;
    }
  },
  filenames: {
    concatenatedCSS            : 'semantic.css',
    concatenatedJS             : 'semantic.js',
    concatenatedMinifiedCSS    : 'semantic.min.css',
    concatenatedMinifiedJS     : 'semantic.min.js',
    concatenatedRTLCSS         : 'semantic.rtl.css',
    concatenatedMinifiedRTLCSS : 'semantic.rtl.min.css'
  },
  regExp: {
    comments: {
      variables : {
        in  : /(\/\*[\s\S]+?\*\/+)[\s\S]+?\/\* End Config \*\
        out : '$1',
      },
      license: {
        in  : /(^\/\*[\s\S]+)(# Semantic UI )([\s\S]+?\*\/)/,
        out : '$1$2' + release.version + ' $3'
      },
      large: {
        in  : /(\/\*\*\*\*[\s\S]+?\*\/)/mg,
        out : '\n\n$1\n'
      },
      small: {
        in  : /(\/\*---[\s\S]+?\*\/)/mg,
        out : '\n$1\n'
      },
      tiny: {
        in  : /(\/\* [\s\S]+? \*\/)/mg,
        out : '\n$1'
      }
    },
    theme: /.*(\/|\\)themes(\/|\\).*?(?=(\/|\\))/mg
  },
  settings: {
    del: {
      silent : true
    },
    concatCSS: {
      rebaseUrls: false
    },
    header: {
      title      : release.title,
      version    : release.version,
      repository : release.repository,
      url        : release.url
    },
    plumber: {
      less: {
        errorHandler: function(error) {
          var
            regExp = {
              variable : /@(\S.*?)\s/,
              theme    : /themes[\/\\]+(.*?)[\/\\].*/,
              element  : /[\/\\]([^\/\\*]*)\.overrides/
            },
            theme,
            element
          ;
          if(error.filename.match(/theme.less/)) {
            if(error.line == 5) {
              element  = regExp.variable.exec(error.message)[1];
              if(element) {
                console.error('Missing theme.config value for ', element);
              }
              console.error('Most likely new UI was added in an update. You will need to add missing elements from theme.config.example');
            }
            if(error.line == 46) {
              element = regExp.element.exec(error.message)[1];
              theme   = regExp.theme.exec(error.message)[1];
              console.error(theme + ' is not an available theme for ' + element);
            }
          }
          else {
            console.log(error);
          }
          this.emit('end');
        }
      }
    },
    prefix: {
      browsers: [
        'last 2 versions',
        '> 1%',
        'opera 12.1',
        'bb 10',
        'android 4'
      ]
    },
    rename: {
      minJS     : { extname : '.min.js' },
      minCSS    : { extname : '.min.css' },
      rtlCSS    : { extname : '.rtl.css' },
      rtlMinCSS : { extname : '.rtl.min.css' }
    },
    minify: {
      processImport       : false,
      restructuring       : false,
      keepSpecialComments : 1,
      roundingPrecision   : -1,
    },
    uglify: {
      mangle   : true,
      output: {
        comments: 'some'
      }
    },
    concatMinify: {
      processImport       : false,
      restructuring       : false,
      keepSpecialComments : false,
      roundingPrecision   : -1,
    },
    concatUglify: {
      mangle   : true,
      output: {
        comments: 'some'
      }
    }
  }
};
