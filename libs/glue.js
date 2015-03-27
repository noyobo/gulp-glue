'use strict'

var spawn = require('child_process').spawn
var which = require('which').sync
var gutil = require('gulp-util')

var glueHandler = 'glue'

var Args = require('./args')

module.exports = function(option, callback) {
  try {
    glueHandler = which(glueHandler)
  } catch (err) {
    gutil.log(gutil.colors.yellow('尚未安装 glue, 请先安装 glue'))
    gutil.log(gutil.colors.green('$ sudo brew install jpeg'))
    gutil.log(gutil.colors.green('$ sudo pip install glue'))
    return callback && callback(127)
  }
  var args = Args.getArgs(option)
  // console.log(args.join(' '))
  var child = spawn(glueHandler, args, {
    cwd: process.cwd()
  })
  var stdout = ''
  var stderr = ''
  child.stdout.setEncoding('utf8')
  child.stdout.on('data', function(data) {
    stdout += data
  })
  child.stderr.setEncoding('utf8')
  child.stderr.on('data', function(data) {
    stderr += data
  })
  child.on('close', function(code) {
    if (code === 0) {
      callback && callback(null)
    } else {
      console.log(stderr)
      process.exit(code)
    }
  })
}
