var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var swig = require('gulp-swig');
var data = require('gulp-data');
var livereload = require('gulp-livereload');
var twig = require('gulp-twig');
var surge = require('gulp-surge')
var fs = require('fs');

var distImg = './src/img/';

gulp.task('compile', function () {
    'use strict';
    return gulp.src(['./src/**/*.twig', '!./src/layout.twig', '!./src/_partials/**/*'])
      .pipe(data(function(file) {
        return JSON.parse(fs.readFileSync('./src/_data.json'));
      }))
      .pipe(twig({
            extname: '.html'
        }))
      .pipe(gulp.dest('./web'))
      .pipe(livereload());
});

gulp.task('js', function () {
  return gulp.src(['src/js/*.js'])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./web/js'))
    .pipe(livereload());
})

gulp.task('css', function () {
  return gulp.src(['./src/css/*.css'])
    .pipe(gulp.dest('./web/css'))
    .pipe(livereload());
})

gulp.task('img', function () {
  return gulp.src(['src/img/**/*.jpg'])
    .pipe(gulp.dest('./web/img'))
    .pipe(livereload());
})

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['./src/**/*.twig','./src/_data.json'], ['compile']);
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('./src/**/*.css', ['css']);
  gulp.watch('src/img/**/*.jpg', ['img']);
});

gulp.task('deploy', [], function () {
  return surge({
    project: './web', //
    domain: 'gulptwigtachyons-barbajs.surge.sh'  // Your domain or Surge subdomain
  })
})

gulp.task('build', ['compile', 'js', 'css', 'img']);

gulp.task('default', ['build', 'watch']);
