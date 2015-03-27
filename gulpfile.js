'use strict';

var gulp = require('gulp');

var glue = require('./');

gulp.task('icon:retina', function() {
  return gulp
    .src(['./test/sprites-retina/**/*.*'])
    .pipe(glue({
      source: 'test/sprites-retina',
      output: 'build',
      retina: true,
      less: 'build'
    }))
})


gulp.task('icon', ['icon:retina'], function() {
  return gulp
    .src(['./test/sprites/**/*.*'])
    .pipe(glue({
      source: 'test/sprites',
      output: 'build',
      'no-css': true,
      'force': true
    }))
})
