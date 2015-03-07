'use strict';

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		bower: {
			options: {
				targetDir: './bower_components'
			},
			install: {			
			}
		},
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
		}
	});

	grunt.registerTask('build', ['bower', 'concat', 'uglify']);

	grunt.registerTask('default', ['build']);
};
