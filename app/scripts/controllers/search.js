'use strict';

angular.module('myApp')
	.controller('searchController', ['$scope', function ($scope) {
		$scope.pageAnimateClass = 'page-animate-search';
		$scope.info = {
			name: "Sun Lee",
			education: "Stony Brook University - B.A. Linguistics",
			email: "sunlee.newyork@gmail.com",
			github: "www.github.com/sunlee-newyork",
			linkedin: "www.linkedin.com/in/sunleenewyork",
			location: "Brooklyn, NY",
			number: "(917) 485-8278",
			instagram: "www.instagram.com/foodeatyum",
			job: "Full Stack Engineer @Poppin",
			position: "Full Stack Engineer @Poppin",
			work: "Poppin",
			workplace: "Poppin",
			company: "Poppin",
			resume: "Coming soon!",
			portfolio: "Coming soon",
			projects: "Coming soon",
			age: "Nice try!",
			contact: "sunlee.newyork@gmail.com"
		}

		$scope.showResult = function (input) {		
			var found = 0;
			angular.forEach($scope.info, function (value, index) {
				if (input.toLowerCase() == index.toLowerCase()) {
					$scope.searchResult = value;	
					found = 1;
				} 
			});
			if (found == 0) {
				$scope.searchResult = "No results";
			}
		}
	}]);
