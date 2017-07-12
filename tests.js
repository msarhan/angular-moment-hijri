'use strict';

describe('angularMomentHijri', function () {

	var $rootScope, $compile, $window, $filter, moment, amTimeAgoConfig, originalTimeAgoConfig, angularMomentConfig,
		originalAngularMomentConfig, amMoment;

	beforeEach(module('angularMomentHijri'));

	beforeEach(inject(function ($injector) {
		$rootScope = $injector.get('$rootScope');
		$compile = $injector.get('$compile');
		$window = $injector.get('$window');
		$filter = $injector.get('$filter');
		moment = $injector.get('moment');
		amMoment = $injector.get('amMoment');
		amTimeAgoConfig = $injector.get('amTimeAgoConfig');
		angularMomentConfig = $injector.get('angularMomentConfig');
		originalTimeAgoConfig = angular.copy(amTimeAgoConfig);
		originalAngularMomentConfig = angular.copy(angularMomentConfig);

		// Ensure the locale of moment.js is set to en by default
		(moment.locale || moment.lang)('en');
	}));

	describe('amDateFormat filter', function () {
		var amDateFormat;

		beforeEach(function () {
			amDateFormat = $filter('amDateFormat');
		});

		it('should format hijri date with en locale', function () {
			var greg = new Date(2015, 2, 17, 7, 10, 20);
			expect(amDateFormat(greg, 'dddd, iMMMM iYYYY, hh:mm:ss a')).toBe('Tuesday, Jumada al-Ula 1436, 07:10:20 am');
		});

		it('should format hijri date with en locale', function () {
			var greg = new Date(1981, 7, 17, 7, 10, 20);
			expect(amDateFormat(greg, 'iYYYY-iMMMM-iDD hh:mm:ss')).toBe('1401-Shawwal-17 07:10:20');
		});

		it('should format hijri date with ar-sa locale', function () {
			moment.locale('ar-sa');
			var greg = new Date(1981, 7, 17, 7, 10, 20);
			expect(amDateFormat(greg, 'iYYYY-iMMMM-iDD hh:mm:ss')).toBe('١٤٠١-شوال-١٧ ٠٧:١٠:٢٠');
		});

	});

});