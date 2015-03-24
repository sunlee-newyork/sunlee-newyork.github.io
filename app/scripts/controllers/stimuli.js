'use strict';

angular.module('myApp')
	.controller('stimuliController', ['$scope', '$sce', function ($scope, $sce) {
		// $scope.pageAnimateClass = "page-animate-stimuli";
		$scope.srcs = [
			{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"},
			{url: "/assets/gifs/liquidsunshine.gif", name: "Liquid Sunshine"},
			{url: "/assets/gifs/charliewasasinner.gif", name: "Charlie Was A Sinner"},
			{url: "/assets/gifs/houseofborel.gif", name: "House of Borel"},
			{url: "/assets/gifs/forbettercoffee.gif", name: "For Better Coffee"},
			{url: "/assets/gifs/lahautesociete.gif", name: "La Haute Societe"}
		]

		angular.forEach($scope.srcs, function (value, index) {
			console.log(index);
			console.log(value);
			value.url = $sce.trustAsResourceUrl(value.url);
		});
	}]);