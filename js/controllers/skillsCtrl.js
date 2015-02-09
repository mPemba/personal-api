var app = angular.module('myApi');

app.controller('skillsCtrl', function($scope, $rootScope, mainService) {
	mainService.getData('skills').then(function(res) {
		console.log(res);
		$scope.skname = res;
		$scope.experience = res;
	})
});