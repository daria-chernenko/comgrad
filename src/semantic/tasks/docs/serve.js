var
  gulp         = require('gulp'),
  console      = require('better-console'),
  fs           = require('fs'),
  autoprefixer = require('gulp-autoprefixer'),
  chmod        = require('gulp-chmod'),
  clone        = require('gulp-clone'),
  gulpif       = require('gulp-if'),
  header       = require('gulp-header'),
  less         = require('gulp-less'),
  minifyCSS    = require('gulp-clean-css'),
  plumber      = require('gulp-plumber'),
  print        = require('gulp-print'),
  rename       = require('gulp-rename'),
  replace      = require('gulp-replace'),
  uglify       = require('gulp-uglify'),
  util         = require('gulp-util'),
  watch        = require('gulp-watch'),
  config       = require('../config/docs'),
  tasks        = require('../config/tasks'),
  configSetup  = require('../config/project/config'),
  install      = require('../config/project/install'),
  banner       = tasks.banner,
  comments     = tasks.regExp.comments,
  log          = tasks.log,
  settings     = tasks.settings,
  globs,
  assets,
  output,
  source
;
require('../collections/internal')(gulp);
module.exports = function () {
  config = configSetup.addDerivedValues(config);
  globs  = config.globs;
  assets = config.paths.assets;
  output = config.paths.output;
  source = config.paths.source;
  gulp
    .watch([
      'src*.*'
    ], function(file) {
      console.clear();
      return gulp.src(file.path, {
          base: 'src/'
        })
        .pipe(gulp.dest(output.less))
        .pipe(print(log.created))
      ;
    })
  ;
  gulp
    .watch([
      'examples*.*'
    ], function(file) {
      console.clear();
      return gulp.src(file.path, {
          base: 'examples/'
        })
        .pipe(gulp.dest(output.examples))
        .pipe(print(log.created))
      ;
    })
  ;
  gulp
    .watch([
      source.config,
      source.definitions   + '*.less',
      source.site          + '*.{overrides,variables}',
      source.themes        + '*.{overrides,variables}'
    ], function(file) {
      var
        lessPath,
        stream,
        compressedStream,
        uncompressedStream,
        isDefinition,
        isPackagedTheme,
        isSiteTheme,
        isConfig
      ;
      gulp.src(file.path)
        .pipe(print(log.modified))
      ;
      isConfig        = (file.path.indexOf('theme.config') !== -1 || file.path.indexOf('site.variables') !== -1);
      isPackagedTheme = (file.path.indexOf(source.themes) !== -1);
      isSiteTheme     = (file.path.indexOf(source.site) !== -1);
      isDefinition    = (file.path.indexOf(source.definitions) !== -1);
      if(isConfig) {
        return;
      }
      else if(isPackagedTheme) {
        console.log('Change detected in packaged theme');
        lessPath = util.replaceExtension(file.path, '.less');
        lessPath = lessPath.replace(tasks.regExp.theme, source.definitions);
      }
      else if(isSiteTheme) {
        console.log('Change detected in site theme');
        lessPath = util.replaceExtension(file.path, '.less');
        lessPath = lessPath.replace(source.site, source.definitions);
      }
      else {
        console.log('Change detected in definition');
        lessPath = file.path;
      }
      if( fs.existsSync(lessPath) ) {
        stream = gulp.src(lessPath)
          .pipe(plumber())
          .pipe(less(settings.less))
          .pipe(replace(comments.variables.in, comments.variables.out))
          .pipe(replace(comments.large.in, comments.large.out))
          .pipe(replace(comments.small.in, comments.small.out))
          .pipe(replace(comments.tiny.in, comments.tiny.out))
          .pipe(autoprefixer(settings.prefix))
          .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        ;
        uncompressedStream = stream.pipe(clone());
        compressedStream   = stream.pipe(clone());
        uncompressedStream
          .pipe(plumber())
          .pipe(replace(assets.source, assets.uncompressed))
          .pipe(header(banner, settings.header))
          .pipe(gulp.dest(output.uncompressed))
          .pipe(print(log.created))
          .on('end', function() {
            gulp.start('package uncompressed docs css');
          })
        ;
        compressedStream = stream
          .pipe(plumber())
          .pipe(replace(assets.source, assets.compressed))
          .pipe(minifyCSS(settings.minify))
          .pipe(rename(settings.rename.minCSS))
          .pipe(header(banner, settings.header))
          .pipe(gulp.dest(output.compressed))
          .pipe(print(log.created))
          .on('end', function() {
            gulp.start('package compressed docs css');
          })
        ;
      }
      else {
        console.log('Cannot find UI definition at path', lessPath);
      }
    })
  ;
  gulp
    .watch([
      source.definitions   + '*.js'
    ], function(file) {
      gulp.src(file.path)
        .pipe(plumber())
        .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        .pipe(gulp.dest(output.uncompressed))
        .pipe(print(log.created))
        .pipe(uglify(settings.uglify))
        .pipe(rename(settings.rename.minJS))
        .pipe(gulp.dest(output.compressed))
        .pipe(print(log.created))
        .on('end', function() {
          gulp.start('package compressed docs js');
          gulp.start('package uncompressed docs js');
        })
      ;
    })
  ;
  gulp
    .watch([
      source.themes   + 'assets' + globs.components + '?(s).*'
    ], function(file) {
      gulp.src(file.path, { base: source.themes })
        .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        .pipe(gulp.dest(output.themes))
        .pipe(print(log.created))
      ;
    })
  ;
};
