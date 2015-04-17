'use strict';

angular.module('myApp', [
		'ngSanitize',
		'ngAnimate',
		'ngRoute'
	])

	.directive('ngEnter', function () {
	    return function (scope, element, attrs) {
	        element.bind("keydown keypress", function (event) {
	            if (event.which === 13) {
	                scope.$apply(function (){
	                    scope.$eval(attrs.ngEnter);
	                });

	                event.preventDefault();
	            }
	        });
	    };
	})

	.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: '/app/views/home.html',
				controller: 'homeController'
			})

			.when('/navigator', {
				templateUrl: '/app/views/navigator.html'
			})

			.when('/search', {
				templateUrl: '/app/views/search.html',
				controller: 'searchController'
			})

			.when('/stimuli', {
				templateUrl: '/app/views/stimuli.html',
				controller: 'stimuliController'
			})

			.when('/social', {
				templateUrl: '/app/views/social.html',
				controller: 'socialController'
			})
			
			.when('/DigitalMenuUI', {
				templateUrl: '/app/views/menu.html',
				controller: 'menuController'
			})

			.otherwise({
				redirectTo: '/'
			});
	}])



