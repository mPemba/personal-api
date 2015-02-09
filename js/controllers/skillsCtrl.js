var app = angular.module('myApi');

app.controller('skillsCtrl', function($scope, $rootScope, mainService) {
	mainService.getData('skills').then(function(res) {
		$scope.skills = res;
	})
});