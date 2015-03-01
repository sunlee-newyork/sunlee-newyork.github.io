'use strict';

angular.module('myApp')
	.controller('stimuliController', ['$scope', '$sce', function ($scope, $sce) {
		$scope.pageAnimateClass = "page-animate-stimuli";
		$scope.srcs = [
			{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"},
			{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"},
			{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"},
			{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"},
			{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"},
			{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"},
			{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"}
			// {url: "http://www.themenectar.com/demo/salient-frostwave/", name: "Salient"}
		]

		angular.forEach($scope.srcs, function (value, index) {
			console.log(index);
			console.log(value);
			value.url = $sce.trustAsResourceUrl(value.url);
		});
	}]);