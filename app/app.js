'use strict';

var app = angular.module('myApp', []);

app.directive('ngEnter', function () {
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
});

// app.directive('results', function () {
// 	return {
// 		restrict: "A",
// 		link: function (scope, elem, attrs) {
// 			$(elem).show();
// 		}
// 	}
// });

app.controller('searchEngine', ['$scope', function ($scope) {
	$scope.info = {
		name: "Sun Lee",
		education: "Stony Brook University - B.A. Linguistics",
		email: "sunlee.newyork@gmail.com",
		github: "github.com/sunlee-newyork"
	}
	$scope.showResult = function (searchInput) {
		angular.forEach($scope.info, function (value, index) {
			if (searchInput == index) {
				$scope.searchResult = value;	
			}
		});
		var result = angular.element('#result');
		result.css('height', '200px');
		result.css('opacity', '1');
	}
}]);