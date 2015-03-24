'use strict';

angular.module('myApp')
	.controller('socialController', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {

		// var url = "https://api.instagram.com/v1/tags/foodeatyum/media/recent?access_token=311171397.1fb234f.777d31eae85e4498a188ef7ca206e1af&callback=callback";
		// $scope.method = 'GET';
		// $scope.url = "https://api.instagram.com/v1/tags/foodeatyum/media/recent?access_token=311171397.1fb234f.777d31eae85e4498a188ef7ca206e1af&callback=callback";

		function callback(res) {
			for (i=0; i<res.data.length; i++) {
				$scope.srcs.push({url: res.data[i].images.standard_resolution.url});
			}
			console.log($scope.srcs);
		}

		// $scope.fetch = function () {
		// 	$http({method: $scope.method, url: $scope.url}).
		// 		success(function (res, status) {
		// 			console.log("success");
		// 			// for (i=0; i<res.data.length; i++) {
		// 			// 	$scope.srcs.push({url: res.data[i].images.standard_resolution.url});
		// 			// }
		// 			// angular.forEach($scope.srcs, function (value, index) {
		// 			// 	console.log(index);
		// 			// 	console.log(value);
		// 			// 	value.url = $sce.trustAsResourceUrl(value.url);
		// 			// });
		// 		}).
		// 		error(function (res, status) {
		// 			console.log("failed");
		// 			// $scope.res = res || "Request failed";
		// 			// $scope.status = status;
		// 		}); 
		// }

		// $scope.fetch();
		// function callback(res) {
			
		// }

		// window.onload = function() {
		//   var igContainer = document.getElementById('block-yui_3_17_2_2_1426451420457_9128');
		//   for (i=0; i<igFeed.data.length; i++) {
		//     var img = document.createElement("img");
		//     img.setAttribute("src", igFeed.data[i].images.standard_resolution.url);
		//     img.className = "ig-img";
		//     igContainer.appendChild(img);
		//   }
		// }

		// $scope.srcs = [
		// 	{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"},
		// 	{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"},
		// 	{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"},
		// 	{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"},
		// 	{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"},
		// 	{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"},
		// 	{url: "/assets/gifs/namesforchange.gif", name: "Names For Change"}
		// ]

		
	}]);