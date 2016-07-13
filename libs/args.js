'use strict'

var copy = require('copy-to')

var defaultArgs = {
  'quiet': false,
  'recursive': false,
  // 'follow-links': '',
  'force': false,
  'watch': false,
  'project': false,
  'algorithm': 'square',
  'ordering': 'maxside',
  'css': '',
  'less': '',
  'less-template': '',
  'scss': '',
  'scss-template': '',
  'namespace': 'sprite',
  'sprite-namespace': '{sprite_name}',
  'url': '',
  'cachebuster': false,
  'cachebuster-filename': false,
  'separator': '-',
  'css-template': '',
  'pseudo-class-separato': '__',
  'img': '',
  'no-img': false,
  'no-css': false,
  'crop': false,
  'padding': '',
  'margin': '',
  'png8': false,
  'ratios': '',
  'retina': false,
  'html': '',
  'cocos2': '',
  'json': '',
  'json-format': '',
  'caat': ''
}

module.exports.getArgs = function(obj) {
  var result = []
  var args = obj || {}
  copy(defaultArgs).to(args)
  for (var k in args) {
    var val = args[k]
    if (k === 'namespace' || k === 'sprite-namespace') {
      result.push('--' + k, val)
    } else if (val && val !== true) {
      result = result.concat(['--' + k, val])
    } else if (val && val === true) {
      result.push('--' + k)
    }
  }
  return result
}
