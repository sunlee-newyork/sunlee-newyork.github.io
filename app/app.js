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
		github: "github.com/sunlee-newyork",
		linkedin: "linkedin.com/in/sunleenewyork/",
		location: "Brooklyn, NY",
		number: "(917) 485-8278",
		facebook: "facebook.com/sunlee1988",
		instagram: "instagram.com/foodeatyum/"
	}
	$scope.showResult = function (input) {
		angular.forEach($scope.info, function (value, index) {
			if (input == index) {
				$scope.searchResult = value;	
			} //else { $scope.searchResult = "No results"; }
		});
		var result = angular.element('#result');
		result.css('height', '150px');
		result.css('opacity', '1');
	}
}]);