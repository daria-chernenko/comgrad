var
  gulp         = require('gulp'),
  console      = require('better-console'),
  fs           = require('fs'),
  map          = require('map-stream'),
  autoprefixer = require('gulp-autoprefixer'),
  chmod        = require('gulp-chmod'),
  clone        = require('gulp-clone'),
  flatten      = require('gulp-flatten'),
  gulpif       = require('gulp-if'),
  header       = require('gulp-header'),
  less         = require('gulp-less'),
  minifyCSS    = require('gulp-clean-css'),
  plumber      = require('gulp-plumber'),
  print        = require('gulp-print'),
  rename       = require('gulp-rename'),
  replace      = require('gulp-replace'),
  uglify       = require('gulp-uglify'),
  config       = require('../config/docs'),
  tasks        = require('../config/tasks'),
  configSetup  = require('../config/project/config'),
  install      = require('../config/project/install'),
  metadata     = require('./metadata'),
  globs,
  assets,
  output,
  source,
  banner       = tasks.banner,
  comments     = tasks.regExp.comments,
  log          = tasks.log,
  settings     = tasks.settings
;
require('../collections/internal')(gulp);
module.exports = function(callback) {
  var
    stream,
    compressedStream,
    uncompressedStream
  ;
  config = configSetup.addDerivedValues(config);
  globs  = config.globs;
  assets = config.paths.assets;
  output = config.paths.output;
  source = config.paths.source;
  console.info('Building Metadata');
  gulp.src(config.paths.template.eco + globs.eco)
    .pipe(map(metadata.parser))
    .on('end', function() {
      fs.writeFile(output.metadata + '/metadata.json', JSON.stringify(metadata.result, null, 2));
    })
  ;
  console.info('Copying examples');
  gulp.src('examples*.*')
    .pipe(gulp.dest(output.examples))
    .pipe(print(log.created))
  ;
  console.info('Copying LESS source');
  gulp.src('src*.*')
    .pipe(gulp.dest(output.less))
    .pipe(print(log.created))
  ;
  console.info('Building Semantic for docs');
  if( !install.isSetup() ) {
    console.error('Cannot build files. Run "gulp install" to set-up Semantic');
    return;
  }
  stream = gulp.src(source.definitions + '' + globs.components + '.less')
    .pipe(plumber())
    .pipe(less(settings.less))
    .pipe(autoprefixer(settings.prefix))
    .pipe(flatten())
  ;
  uncompressedStream = stream.pipe(clone());
  compressedStream   = stream.pipe(clone());
  uncompressedStream
    .pipe(plumber())
    .pipe(replace(comments.variables.in, comments.variables.out))
    .pipe(replace(comments.large.in, comments.large.out))
    .pipe(replace(comments.small.in, comments.small.out))
    .pipe(replace(comments.tiny.in, comments.tiny.out))
    .pipe(replace(assets.source, assets.uncompressed))
    .pipe(header(banner, settings.header))
    .pipe(gulpif(config.hasPermission, chmod(config.permission)))
    .pipe(gulp.dest(output.uncompressed))
    .pipe(print(log.created))
    .on('end', function() {
      gulp.start('package uncompressed docs css');
    })
  ;
  compressedStream = stream
    .pipe(plumber())
    .pipe(clone())
    .pipe(replace(assets.source, assets.compressed))
    .pipe(minifyCSS(settings.minify))
    .pipe(rename(settings.rename.minCSS))
    .pipe(header(banner, settings.header))
    .pipe(gulpif(config.hasPermission, chmod(config.permission)))
    .pipe(gulp.dest(output.compressed))
    .pipe(print(log.created))
    .on('end', function() {
      callback();
      gulp.start('package compressed docs css');
    })
  ;
  gulp.src(source.themes + 'assets*.*')
    .pipe(gulpif(config.hasPermission, chmod(config.permission)))
    .pipe(gulp.dest(output.themes))
  ;
  gulp.src(source.definitions + '' + globs.components + '.js')
    .pipe(plumber())
    .pipe(flatten())
    .pipe(gulp.dest(output.uncompressed))
    .pipe(gulpif(config.hasPermission, chmod(config.permission)))
    .pipe(print(log.created))
    .pipe(uglify(settings.uglify))
    .pipe(rename(settings.rename.minJS))
    .pipe(header(banner, settings.header))
    .pipe(gulp.dest(output.compressed))
    .pipe(gulpif(config.hasPermission, chmod(config.permission)))
    .pipe(print(log.created))
    .on('end', function() {
      gulp.start('package compressed docs js');
      gulp.start('package uncompressed docs js');
    })
  ;
};
