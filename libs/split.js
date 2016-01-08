'use strict';
/**
 * For group pictures
 */
var path = require('path');
var pluginName = 'gulp-glue'
var through2 = require('through2')
var gutil = require('gulp-util')
var isImage = require('is-image');

module.exports = function(option) {
  option = option || {};
  var MAX_CONTENTS_LENGTH = option.max || 500000;
  var totalLentgh = 0;
  return through2.obj(function(file, env, cb) {
    if (file.isNull()) {
      return cb(null, file)
    }
    if (file.isStream()) {
      return cb(new gutil.PluginError(pluginName, 'Streaming not supported', {
        fileName: file.path,
        showStack: false
      }))
    }
    if (!isImage(file.path)) {
      return cb(null, file)
    }

    var groupIndex = Math.floor(totalLentgh / MAX_CONTENTS_LENGTH);
    var dirname = path.dirname(file.path);
    var filename = path.basename(file.path);
    
    file.path = path.resolve(dirname + '-' + groupIndex, filename);
    
    totalLentgh = totalLentgh + file.contents.length;
    
    cb(null, file)
  }, function(done) {
    gutil.log('split image assets done!');
    done();
  })
};
