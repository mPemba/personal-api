var app = angular.module('myApi');

app.controller('skillsCtrl', function($scope, mainService) {
	mainService.getData('skills').then(function(res) {
		console.log(res);
		$scope.skill = res;
	})
});