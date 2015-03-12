'use strict';

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		logLevel: config.LOG_INFO,
		reporters: ['dots'],
		browsers: ['Chrome'],
		autoWatch: true,
		files: [
			"bower_components/moment/min/moment-with-locales.min.js",
			"bower_components/moment-hijri/moment-hijri.js",
			"bower_components/angular/angular.min.js",
			"bower_components/angular-moment/angular-moment.min.js",
			"angular-moment-hijri.min.js",
			'bower_components/angular-mocks/angular-mocks.js',
			
			"tests.js"
		]
	});
};