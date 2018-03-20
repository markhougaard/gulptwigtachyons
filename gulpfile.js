var gulp = require('gulp');
var swig = require('gulp-swig');
var data = require('gulp-data');
var livereload = require('gulp-livereload');
var twig = require('gulp-twig');
var fs = require('fs');

gulp.task('compile', function () {
    'use strict';
    return gulp.src(['./src/*.twig', '!./src/layout.twig'])
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
  return gulp.src(['./src/js/*.js'])
    .pipe(gulp.dest('./web/js'))
    .pipe(livereload());
})

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['./src/**/*.twig','./src/_data.json'], ['compile']);
  gulp.watch('./src/**/*.js', ['js']);
});

gulp.task('build', ['compile', 'js']);

gulp.task('default', ['watch']);
