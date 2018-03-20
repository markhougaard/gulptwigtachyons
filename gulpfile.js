var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('compile', function () {
    'use strict';
    var twig = require('gulp-twig');
    return gulp.src(['./src/*.twig','!./src/layout.twig'])
        .pipe(twig({
            data: {
                title: 'Gulp and Twig and Tachyons',
                titleShort: 'GTT',
                benefits: [
                    'Fast',
                    'Flexible',
                    'Fun',
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
