var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('compile', function () {
    'use strict';
    var twig = require('gulp-twig');
    return gulp.src('./src/*.twig')
        .pipe(twig({
            data: {
                title: 'Gulp and Twig and Tachyons',
                titleshort: 'GTT',
                benefits: [
                    'Fast',
                    'Flexible',
                    'Free'
                ],
                clients: [
                  'Google',
                  'Facebook',
                  'Acme Inc.',
                  'Pixar',
                  'Nike',
                  'James Greig'
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
