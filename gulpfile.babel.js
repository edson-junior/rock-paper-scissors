'use strict';

import gulp from 'gulp';
import webpack from 'gulp-webpack';
import gls from 'gulp-live-server';

gulp.task('js', () => {
  return gulp.src('public/src/js/*.js')
    .pipe(webpack({
      watch: true,
      module: {
        loaders: [{
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['eslatest-node6']
          }
        }]
      },
      output: {
        filename: 'app.js'
      }
    }))
    .pipe(gulp.dest('public/dist/js/'));
});

gulp.task('build', () => {
  gulp.start(['js']);
  gulp.start(['serve']);
});

gulp.task('serve', () => {
  var server = gls.new('index.js');
  server.start();
});

gulp.task('watch', () => {
  gulp.watch("public/src/js/**/*", ['js']);
});

gulp.task('default',['build'], () => {
  gulp.start(['watch']);
});
