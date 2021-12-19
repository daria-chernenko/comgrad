var
  gulp         = require('gulp-help')(require('gulp')),
  console      = require('better-console'),
  fs           = require('fs'),
  autoprefixer = require('gulp-autoprefixer'),
  chmod        = require('gulp-chmod'),
  clone        = require('gulp-clone'),
  gulpif       = require('gulp-if'),
  less         = require('gulp-less'),
  minifyCSS    = require('gulp-clean-css'),
  plumber      = require('gulp-plumber'),
  print        = require('gulp-print'),
  rename       = require('gulp-rename'),
  replace      = require('gulp-replace'),
  uglify       = require('gulp-uglify'),
  util         = require('gulp-util'),
  watch        = require('gulp-watch'),
  config       = require('./config/user'),
  tasks        = require('./config/tasks'),
  install      = require('./config/project/install'),
  globs        = config.globs,
  assets       = config.paths.assets,
  output       = config.paths.output,
  source       = config.paths.source,
  banner       = tasks.banner,
  comments     = tasks.regExp.comments,
  log          = tasks.log,
  settings     = tasks.settings
;
if(config.rtl) {
  require('./collections/rtl')(gulp);
}
require('./collections/internal')(gulp);
module.exports = function(callback) {
  if( !install.isSetup() ) {
    console.error('Cannot watch files. Run "gulp install" to set-up Semantic');
    return;
  }
  if(config.rtl == 'both') {
    gulp.start('watch-rtl');
  }
  if(config.rtl === true || config.rtl === 'Yes') {
    gulp.start('watch-rtl');
    return;
  }
  console.log('Watching source files for changes');
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
        console.info('Rebuilding all UI');
        gulp.start('build-css');
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
          .pipe(plumber(settings.plumber.less))
          .pipe(less(settings.less))
          .pipe(print(log.created))
          .pipe(replace(comments.variables.in, comments.variables.out))
          .pipe(replace(comments.license.in, comments.license.out))
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
          .pipe(gulp.dest(output.uncompressed))
          .pipe(print(log.created))
          .on('end', function() {
            gulp.start('package uncompressed css');
          })
        ;
        compressedStream = stream
          .pipe(plumber())
          .pipe(replace(assets.source, assets.compressed))
          .pipe(minifyCSS(settings.minify))
          .pipe(rename(settings.rename.minCSS))
          .pipe(gulp.dest(output.compressed))
          .pipe(print(log.created))
          .on('end', function() {
            gulp.start('package compressed css');
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
        .pipe(replace(comments.license.in, comments.license.out))
        .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        .pipe(gulp.dest(output.uncompressed))
        .pipe(print(log.created))
        .pipe(uglify(settings.uglify))
        .pipe(rename(settings.rename.minJS))
        .pipe(gulp.dest(output.compressed))
        .pipe(print(log.created))
        .on('end', function() {
          gulp.start('package compressed js');
          gulp.start('package uncompressed js');
        })
      ;
    })
  ;
  gulp
    .watch([
      source.themes   + 'assets*.*'
    ], function(file) {
      gulp.src(file.path, { base: source.themes })
        .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        .pipe(gulp.dest(output.themes))
        .pipe(print(log.created))
      ;
    })
  ;
};
