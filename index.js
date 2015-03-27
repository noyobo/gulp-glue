'use strict'

var glueCompile = require('./libs/glue')

var pluginName = 'gulp-glue'
var through2 = require('through2')
var gutil = require('gulp-util')
var readChunk = require('read-chunk')
var imageType = require('image-type')

module.exports = function(option) {

  return through2.obj(checkimage, function(done) {
    glueCompile(option, done)
  })

  function checkimage(file, env, callback) {
    if (file.isNull()) {
      return callback(null, file)
    }
    if (file.isStream()) {
      return callback(new gutil.PluginError(pluginName, 'Streaming not supported', {
        fileName: file.path,
        showStack: false
      }))
    }
    // 检查文件类型
    var buffer = readChunk.sync(file.path, 0, 12)
    var type = imageType(buffer)
    if (!type) {
      return callback(null, file)
    }
    var ext = type.ext
    if (ext !== 'jpg' && ext !== 'png' && ext !== 'gif') {
      gutil.log(type, gutil.colors.red('图片类型错误:' + file.path))
      process.exit(1)
    }
    callback(null, file)
  }
}