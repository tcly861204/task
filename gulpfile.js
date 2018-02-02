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
  return gulp.src("./app.es6.js")
    .pipe(babel())
    .pipe(gulp.dest("./build"));
});




gulp.task("default", function() {
  // gulp.watch("20180112/stylus/*.styl", ['stylusTask']);
  gulp.watch("./app.es6.js", ["babelTask"]);
  // gulp.watch("./config/*.js", ["babelTask"]);
  // gulp.watch("./models/*.js", ["babelTask"]);
  // gulp.watch("./tests/server/server.es6.js",["babelTask"]);
  // gulp.watch("./controller/*.js", ["babelTask"]);
});