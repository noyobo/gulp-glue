```bash
-h, --help            show this help message and exit
--source SOURCE, -s SOURCE
                      Source path
--output OUTPUT, -o OUTPUT
                      Output path
-q, --quiet           Suppress all normal output
-r, --recursive       Read directories recursively and add all the images to
                      the same sprite.
--follow-links        Follow symbolic links.
-f, --force           Force glue to create every sprite image and metadata
                      file even if they already exists in the output
                      directory.
-w, --watch           Watch the source folder for changes and rebuild when
                      new files appear, disappear or change.
--project             Generate sprites for multiple folders
-v, --version         Show program's version number and exit

Algorithm options:
-a NAME, --algorithm NAME
                      Allocation algorithm: square, vertical, horizontal,
                      vertical-right, horizontal-bottom, diagonal. (default:
                      square)
--ordering NAME       Ordering criteria: maxside, width, height, area or
                      filename (default: maxside)

SCSS format options:
--scss [DIR]          Generate SCSS files and optionally where
--scss-template DIR   Template to use to generate the SCSS output.

JSON format options:
--json [DIR]          Generate JSON files and optionally where
--json-format NAME    JSON structure format (array, hash)

Html format options:
--html [DIR]          Generate html files and optionally where

Sprite image options:
--img DIR             Output directory for img files
--no-img              Don't genereate IMG files.
-c, --crop            Crop images removing unnecessary transparent margins
-p PADDING, --padding PADDING
                      Force this padding in all images
--margin MARGIN       Force this margin in all images
--png8                The output image format will be png8 instead of png32
--ratios RATIOS       Create sprites based on these ratios
--retina              Shortcut for --ratios=2,1

Cocos2d format options:
--cocos2d [DIR]       Generate Cocos2d files and optionally where

CSS format options:
--less [DIR]          Generate LESS files and optionally where
--less-template DIR   Template to use to generate the LESS output.

JSON format options:
--caat [DIR]          Generate CAAT files and optionally where

CSS format options:
--css [DIR]           Generate CSS files and optionally where
--namespace CSS_NAMESPACE
                      Namespace for all css classes (default: sprite)
--sprite-namespace CSS_SPRITE_NAMESPACE
                      Namespace for all sprites (default: {sprite_name})
-u CSS_URL, --url CSS_URL
                      Prepend this string to the sprites path
--cachebuster         Use the sprite's sha1 first 6 characters as a queryarg
                      everytime that file is referred from the css
--cachebuster-filename
                      Append the sprite's sha first 6 characters to the
                      output filename
--cachebuster-filename-only-sprites
                      Only apply cachebuster to sprite images.
--separator SEPARATOR
                      Customize the separator used to join CSS class names.
                      If you want to use camelCase use 'camelcase' as
                      separator.
--pseudo-class-separator SEPARATOR
                      Customize the separator glue will use in order to
                      determine the pseudo classes included into filenames.
--css-template DIR    Template to use to generate the CSS output.
--no-css              Don't genereate CSS files.
```