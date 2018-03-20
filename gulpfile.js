var gulp = require('gulp');
var swig = require('gulp-swig');
var data = require('gulp-data');
var livereload = require('gulp-livereload');
var fs = require('fs');

gulp.task('compile', function () {
    'use strict';
    var twig = require('gulp-twig');
    return gulp.src(['./src/*.twig', './src/_data.json', '!./src/layout.twig'])
      .pipe(data(function(file) {
        return JSON.parse(fs.readFileSync('./src/_data.json'));
      }))
      .pipe(gulp.dest('./web'))
      .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/**/*.twig', ['compile']);
});

gulp.task('default', ['watch']);
