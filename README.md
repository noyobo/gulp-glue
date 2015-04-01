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
    .src(['./sprites-retina/**/*.*'])
    .pipe(glue({
      'source': './sprites-retina',
      'output': './build',
      'project': true,
      'retina': true,
      'less': './build'
    }))
})
```

## Configuration 

[Configuration Options](http://glue.readthedocs.org/en/latest/options.html)

```js
{
  "quiet": false,
  "recursive": false,                 // 递归 source 目录下的图片
  "force": false,
  "watch": false,
  "project": true,                    // 多个目录文件
  "algorithm": "square",              // 排序算法 [square|vertical|horizontal|vertical-right|horizontal-bottom|diagonal]
  "ordering": "maxside",              // 文件排列 [maxside|width|height|area|filename]
  "css": "",                          // 生成 css 的目录
  "css-template": "",                 // css 模板文件路径
  "less": "",                         // 生成 less 的目录
  "less-template": "",                // less 模板文件路径
  "scss": "",                         // 生成 scss 的目录
  "scss-template": "",                // scss 模板文件路径
  "namespace": "sprite",              // 样式前缀
  "sprite-namespace": "{sprite_name}",// 样式分类 默认为文件夹名 
  "url": "",                          // 图片地址 e.g: http://path.com/
  "cachebuster": false,               // 缓存无效化 sprite.png?hash
  "cachebuster-filename": false,      // 文件名缓存无效化 sprite-hash.png
  "separator": "-",                   // 样式分隔符
  "pseudo-class-separato": "__",      // 伪类分隔符 a__hover.png -> a:hover{}
  "img": "",                          // 生成 img 的目录
  "no-img": false,                    // 不生成 img
  "no-css": false,                    // 不生成 css
  "crop": false,                      // 移除周围透明的空间
  "padding": "",
  "margin": "",
  "png8": false,                      // 生成 png8 格式
  "ratios": "",                       // 适配类型 e.g: '2, 1.5, 1'
  "retina": false,                    // 高清模式 等于 ratios:'2, 1' 
  "html": "",                         // html目录 生成 html 展示
  "cocos2": "",
  "json": "",                         // 生成 json 的目录
  "json-format": "",                  // json 模板文件路径
  "caat": ""
}
```
