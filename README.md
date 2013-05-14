canvasResize
=============

**canvasResize** is a plug-in for client side image resizing. It's compatible with **iOS6**. 

It can work both with **jQuery** and **Zepto**

I fixed iOS6 Safari's image file rendering issue for large size image (over mega-pixel) using few functions from 
[**ios-imagefile-megapixel**](https://github.com/stomita/ios-imagefile-megapixel)
And fixed *orientation* issue by using 
[**exif-js**](https://github.com/jseidelin/exif-js)
 
You can change image size and quality with plugin [**options**](#options) easily.

### Tested on: 
 *  Chromium (24.0.1312.56)
 *  Google Chrome (25.0.1364.68 beta)
 *  Opera (12.14)
 *  IOS 6.1.2

You can check it on [gokercebeci.com/dev/canvasresize](http://gokercebeci.com/dev/canvasresize).

Usage
-----

    $('input[name=photo]').change(function(e) {
        var file = e.target.files[0];
        canvasResize(file, {
            width: 300,
            height: 0,
            crop: false,
            quality: 80,
            //rotate: 90,
            callback: function(data, width, height) {
                $(img).attr('src', data);
            }
        });
    });

Options
-------

    width    : 300,     // Image width.
    height   : 0,       // Image height, default 0 (flexible).
    crop     : false,   // default false.
    quality  : 80,      // Image quality default 80.
    rotate   : 90,      // Image rotation default 0
    callback : function(){},

License
-------
It is under [MIT License](https://github.com/gokercebeci/canvasResize/blob/master/LICENCE.md "MIT License") 
and It requires **binaryajax.js** and **exif.js** (or **jQuery EXIF**)
to work which is also under the [MPL License](http://www.nihilogic.dk/licenses/mpl-license.txt)

Developer
---------
[goker](http://gokercebeci.com/ "goker")
