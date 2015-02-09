var app = angular.module('myApi');

app.service('mainService', function($http, $q) {

	this.getData = function(str) {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: 'http://localhost:8666/'+str
		})
		.then(function(res) {

			dfd.resolve(res.data);
		})
		return dfd.promise;
	}

});