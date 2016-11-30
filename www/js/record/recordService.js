angular.module('recordService', [])

.factory('Record', function($http, ApiEndpoint) {

	var recordFactory = {};
	console.log('recordService');
	recordFactory.getBySensor = function(sensor_id){
		return $http.get(ApiEndpoint.url + '/sensors/'+ sensor_id+'/records')
	};

	return recordFactory;
});