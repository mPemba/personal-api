var app = angular.module('myApi', ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'js/templates/homeTmpl.html',
		controller: 'mainCtrl'
	})
	.when('/me', {
		templateUrl: 'js/templates/meTmpl.html',
		controller: 'meCtrl'
	})
	.when('/skills', {
		templateUrl: 'js/templates/skillsTmpl.html',
		controller: 'skillsCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})


});