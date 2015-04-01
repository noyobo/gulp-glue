'use strict';

var gulp = require('gulp');

var glue = require('../');

gulp.task('icon:retina', function() {
  return gulp
    .src(['./sprites-retina/**/*.*'])
    .pipe(glue({
      'source': './sprites-retina',
      'output': 'build',
      'project': true,
      'retina': true,
      'less': 'build'
    }))
})


gulp.task('icon', ['icon:retina'], function() {
  // 针对 gule 自动压缩图片会模糊字体, 单独生成一份覆盖  force:true
  return gulp
    .src(['./sprites/**/*.*'])
    .pipe(glue({
      'source': './sprites',
      'output': 'build',
      'project': true,
      'no-css': true,
      'force': true
    }))
})