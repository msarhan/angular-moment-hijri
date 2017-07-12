'use strict';

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		concat: {
			dist: {
				src: [
					'bower_components/moment-hijri/moment-hijri.js',
					'bower_components/angular-moment/angular-moment.js',
					'angular-moment-hijri-module.js'
				],
				dest: 'angular-moment-hijri.js'
			}
		},
		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					'angular-moment-hijri.min.js': 'angular-moment-hijri.js'
				}
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		}
	});

	grunt.registerTask('build', ['concat', 'uglify']);
	grunt.registerTask('test', ['build', 'karma']);

	grunt.registerTask('default', ['build']);
};
