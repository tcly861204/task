var gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnext = require('cssnext'),
  precss = require('precss'),
  cssmin = require('gulp-minify-css'),
  babel = require("gulp-babel");


gulp.task('stylusTask', function() {
  var processors = [autoprefixer, cssnext, precss];
  gulp.src('20180112/stylus/*.styl')
    .pipe(stylus())
    .pipe(postcss(processors))
    .pipe(cssmin())
    .pipe(gulp.dest('20180112/css/'));
});


gulp.task('babelTask', function() {
  return gulp.src("20180112/es6/*.js")
    .pipe(babel())
    .pipe(gulp.dest("20180112/es5/"));
});



gulp.task("default", function() {
  gulp.watch("20180112/stylus/*.styl", ['stylusTask']);
  gulp.watch("20180112/es6/*.js", ["babelTask"]);
});