(function() {
	'use strict';

	function angularMomentHijri(angular, moment) {
		
		return angular.module('angularMomentHijri', ['angularMoment'])
			.run(function(){
				moment.defineLocale('ar-sa', {
					hMonths: ('محرم_صفر_ربيع الأول_ربيع الثاني_جمادى الأولى_جمادى الآخرة_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة').split('_'),
					hMonthsShort: 'محرم_صفر_ربيع ١_ربيع ٢_جمادى ١_جمادى ٢_رجب_شعبان_رمضان_شوال_ذو القعدة_ذو الحجة'.split('_')				
				});				
			});
	}
	
	angularMomentHijri(angular, window.moment);
})();