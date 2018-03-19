var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('compile', function () {
    'use strict';
    var twig = require('gulp-twig');
    return gulp.src('./src/index.twig')
        .pipe(twig({
            data: {
                title: 'Gulp and Twig and Tachyons',
                benefits: [
                    'Fast',
                    'Flexible',
                    'Free'
                ]
            }
        }))
        .pipe(gulp.dest('./web'))
        .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/**/*.twig', ['compile']);
});

gulp.task('default', ['watch']);
