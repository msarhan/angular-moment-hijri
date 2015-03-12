(function() {
	'use strict';

	function angularMomentHijri(angular, moment) {
		
		return angular.module('angularMomentHijri', ['angularMoment'])
	}
	
	angularMomentHijri(angular, window.moment);
})();