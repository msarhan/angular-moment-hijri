angular-moment-hijri
====================

This is a merge between [@urish](https://github.com/urish)'s [angular-moment](https://github.com/urish/angular-moment) and [xsoh](https://github.com/xsoh)'s [moment-hijri](https://github.com/xsoh/moment-hijri)

[angular-moment](https://github.com/urish/angular-moment) is an AngularJS directives and filters for [Moment.JS](http://www.momentjs.com).

[moment-hijri](https://github.com/xsoh/moment-hijri) is a Hijri (Based on Umm al-Qura calculations) calendar system plugin for [Moment.JS](http://www.momentjs.com).

Installation
------------

* Bower: `bower install angular-moment-hijri --save`
* Download from github: [angular-moment-hijri.min.js](https://raw.github.com/msarhan/angular-moment-hijri/master/angular-moment-hijri.min.js)

Usage
-----
Include both moment.js and angular-moment-hijri.js in your application.

```html
<script src="components/moment/moment.js"></script>
<script src="components/angular-moment-hijri/angular-moment-hijri.js"></script>
```
Add `angularMomentHijri` as a dependency to your app module:

```js
var myApp = angular.module('myApp', ['angularMomentHijri']);
```

If you need Arabic support, load ar-sa.js locale file first:

```html
<script src="components/moment/locale/ar-sa.js"></script>
```

Then call the `amMoment.changeLocale()` method (e.g. inside your app's run() callback):

```js
myApp.run(function(amMoment) {
	amMoment.changeLocale('ar-sa');
});
```

License
-------

Released under the terms of MIT License.
