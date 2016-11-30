angular.module('sensorService', [])

.factory('Sensor', function($http, ApiEndpoint) {

	// create a new object
	var sensorFactory = {};
        
        sensorFactory.getAll = function() {
            return $http.get(ApiEndpoint.url + '/sensors');
        };
	// get a single sensor
	sensorFactory.get = function(id) {
		return $http.get(ApiEndpoint.url + '/sensors/' + id);
	};
        
        sensorFactory.getByWell = function(region_id,field_id,well_id) {
            return $http.get(ApiEndpoint.url + '/regions/' + region_id + '/fields/' + field_id+'/wells/'+well_id+'/sensors');
        };

	// create a sensor
	sensorFactory.create = function(sensorData, well_id) {
		sensorData.well_id=well_id;
		return $http.post(ApiEndpoint.url + '/sensors/', sensorData);
	};

	// update sensor
	sensorFactory.update = function(id, sensorData) {
		return $http.put(ApiEndpoint.url + '/sensors/' + id, sensorData);
	};

	// delete a sensor
	sensorFactory.delete = function(id) {
		return $http.delete(ApiEndpoint.url + '/sensors/' + id);
	};

	// return our entire sensorFactory object
	return sensorFactory;

});