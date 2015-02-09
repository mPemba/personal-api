var app = angular.module('myApi');

app.controller('meCtrl', function($scope, $rootScope, mainService) {
	mainService.getData('hobbies').then(function(res) {
		$scope.hobbies = res;
	})

	mainService.getData('occupations').then(function(res) {
		$scope.occupations = res;
	})

	mainService.getData('mentions').then(function(res) {
		$scope.mentions = res;
	})

	mainService.getData('references').then(function(res) {
		$scope.references = res;
	})


});