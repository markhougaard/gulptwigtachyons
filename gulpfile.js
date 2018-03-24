var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var swig = require('gulp-swig');
var data = require('gulp-data');
var twig = require('gulp-twig');
var fs = require('fs');
var del = require('del');

var distImg = './src/img/';

var express = require('express');
var app = express();
var tinylr = require('tiny-lr')();

BUILD_DIR = 'web',
EXPRESS_ROOT = BUILD_DIR;
EXPRESS_PORT = 3000;
LIVERELOAD_PORT = 35729;

gulp.task('express', function() {
  app.use(require('connect-livereload')({port: LIVERELOAD_PORT}));
  app.use(express.static(EXPRESS_ROOT));
  app.listen(EXPRESS_PORT, '0.0.0.0');
});

gulp.task('livereload', function() {
  tinylr.listen(LIVERELOAD_PORT);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('clean', function(cb) {
  del([BUILD_DIR], cb);
});

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
});

gulp.task('js', function () {
  return gulp.src(['src/js/*.js'])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./web/js'))
})

gulp.task('css', function () {
  return gulp.src(['./src/css/*.css'])
    .pipe(gulp.dest('./web/css'))
})

gulp.task('img', function () {
  return gulp.src(['src/img/**/*.jpg'])
    .pipe(gulp.dest('./web/img'))
})

gulp.task('watch', ['express', 'livereload'], function(eb) {
  gulp.watch(['./src/**/*.twig','./src/_data.json'], ['compile']);
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('./src/**/*.css', ['css']);
  gulp.watch('src/img/**/*.jpg', ['img']);
  gulp.watch(BUILD_DIR + '/**', notifyLiveReload);
});

gulp.task('build', ['compile', 'js', 'css', 'img']);

gulp.task('default', ['build', 'watch']);
