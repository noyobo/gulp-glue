'use strict';

var gulp = require('gulp');
var gulpRimraf = require('gulp-rimraf');
var rimraf = require('rimraf');

var gulpGlue = require('../');

gulp.task('icon:retina', function() {
  return gulp
    .src(['./sprites-retina/**/*.*'])
    .pipe(gulpGlue({
      'source': './sprites-retina',
      'output': 'build',
      'project': true,
      'retina': true,
      'less': 'build',
      'url': 'http://a.b/a/'
    }))
})


gulp.task('icon', ['icon:retina'], function() {
  // 针对 gule 自动压缩图片会模糊字体, 单独生成一份覆盖  force:true
  return gulp
    .src(['./sprites/**/*.*'])
    .pipe(gulpGlue({
      'source': './sprites',
      'output': 'build',
      'project': true,
      'no-css': true,
      'force': true
    }))
})

gulp.task('icontest', function() {
  // 针对 gule 自动压缩图片会模糊字体, 单独生成一份覆盖  force:true
  return gulp
    .src(['./sprites/**/*.*'])
    .pipe(gulpGlue({
      'source': './sprites',
      'output': 'build',
      'project': true,
      'less': './build',
      'sass': './build',
      'less-template': './less.jinja',
      'force': true
    }))
})

gulp.task('clean', function() {
  return gulp.src(['./build'])
    .pipe(gulpRimraf({
      force: true
    }));
})


gulp.task('split', ['clean'], function() {
  return gulp
    .src(['./sprites-retina/**/*.*'])
    .pipe(gulpGlue.split())
    .pipe(gulp.dest('./sprites-retina-temp'))
})

gulp.task('r', ['split'], function() {
  return gulp
    .src(['./sprites-retina-temp/**/*.*'])
    .pipe(gulpGlue({
      'source': './sprites-retina-temp',
      'output': 'build/retina',
      'project': true,
      'retina': true,
      'less': 'build/retina',
      'url': 'http://a.b/a/'
    }, function() {
      rimraf.sync('./sprites-retina-temp/')
    }))
})

gulp.task('combo', function() {
  return gulp.src('./build/retina/*.less')
    .pipe(gulpGlue.combo())
})
