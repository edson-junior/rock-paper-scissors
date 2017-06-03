'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import clean from 'gulp-clean';

gulp.task('js', () => {
  return gulp.src('public/src/js/app.js')
    .pipe(babel({
      presets: ['eslatest-node6']
    }))
    .pipe(gulp.dest('public/dist/js/'));
});

gulp.task('build', function() {
  gulp.start(['js']);
});

gulp.task('watch', function() {
  gulp.watch("public/src/js/**/*", ['js']);
});

gulp.task('default',['build'], function() {
  gulp.start(['watch']);
});
