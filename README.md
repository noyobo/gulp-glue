# gulp-glue

[![npm version](http://img.shields.io/npm/v/gulp-glue.svg)](https://www.npmjs.org/package/gulp-glue) [![npm download](http://img.shields.io/npm/dm/gulp-glue.svg)](https://www.npmjs.org/package/gulp-glue) [![npm dependencise](https://david-dm.org/noyobo/gulp-glue.svg)](https://david-dm.org/noyobo/gulp-glue)

## Requirements

`gulp-glue` requires the **glue** and **jpeg**, 

Please refer the [Installing Glue](http://glue.readthedocs.org/en/latest/installation.html)

## Usage

```js
var glue = require('gulp-glue');

gulp.task('icon', function() {
  return gulp
    .src(['./test/sprites-retina/**/*.*'])
    .pipe(glue({
      'source': 'test/sprites-retina',
      'output': 'build',
      'project': true,
      'retina': true,
      'less': 'build'
    }))
})
```

## Configuration 

[Configuration Options](http://glue.readthedocs.org/en/latest/options.html)

```json
{
  "quiet": false,
  "recursive": false,
  "force": false,
  "watch": false,
  "project": true,
  "algorithm": "square",
  "ordering": "maxside",
  "css": "",
  "less": "",
  "less-template": "",
  "scss": "",
  "scss-template": "",
  "namespace": "sprite",
  "sprite-namespace": "{sprite_name}",
  "url": "",
  "cachebuster": false,
  "cachebuster-filename": false,
  "separator": "-",
  "css-template": "",
  "pseudo-class-separato": "__",
  "img": "",
  "no-img": false,
  "no-css": false,
  "crop": false,
  "padding": "",
  "margin": "",
  "png8": false,
  "ratios": "",
  "retina": "",
  "html": "",
  "cocos2": "",
  "json": "",
  "json-format": "",
  "caat": ""
}
```
