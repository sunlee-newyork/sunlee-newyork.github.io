'use strict';

var app = angular.module('myApp', ['ngSanitize']);

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

app.controller('searchEngine', ['$scope', function ($scope) {
	$scope.info = {
		name: "Sun Lee",
		education: "Stony Brook University - B.A. Linguistics",
		email: "sunlee.newyork@gmail.com",
		github: "www.github.com/sunlee-newyork",
		linkedin: "www.linkedin.com/in/sunleenewyork",
		location: "Brooklyn, NY",
		number: "(917) 485-8278",
		instagram: "www.instagram.com/foodeatyum",
		job: "Integration Engineer @Olapic",
		position: "Integration Engineer @Olapic",
		work: "Olapic",
		workplace: "Olapic",
		company: "Olapic",
		resume: "Coming soon!",
		portfolio: "Coming soon!",
		projects: "Coming soon!",
		age: "Nice try!",
		contact: "sunlee.newyork@gmail.com"
	}

	$scope.showResult = function (input) {
		var result = angular.element('#result');
		result.css('height', '0');
		result.css('opacity', '0');
		angular.forEach($scope.info, function (value, index) {
			if (input == index) {
				$scope.searchResult = value;	
			}
		});
		result.css('min-height', '200px');
		result.css('opacity', '1');
	}
}]);