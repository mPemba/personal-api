var app = angular.module('myApi');

app.controller('mainCtrl', function($scope, $rootScope, mainService) {

	mainService.getData('name').then(function(res) {
		console.log("my name is: "+res);
		$scope.name = res;

	})

	mainService.getData('location').then(function(res) {
		$scope.location = res;
	})

});