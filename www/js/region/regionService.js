angular.module('regionService', [])

.factory('Region', function($http, ApiEndpoint) {

	// create a new object
	var regionFactory = {};

	// get multiple regions
	regionFactory.getAll = function() {
		return $http.get(ApiEndpoint.url + '/regions/'); // returns an array of region objects, each of which contains id and name. You must save the id, otherwise when you want to update it you will need to change the backend
	};

	// get a single region
	regionFactory.get = function(id) {
		return $http.get(ApiEndpoint.url + '/regions/'+id); // returns a solo object contaning the id and name of the region
	};
	// create a region
	regionFactory.create = function(regionData) {
		return $http.post(ApiEndpoint.url + '/regions/', regionData); // region data must be like {name: "islas"}
	};

	// update region
	regionFactory.update = function(id, regionData) {
		
		
		return $http.put(ApiEndpoint.url + '/regions/' + id, regionData); // region data must be be like {name: "San Andrés es Islas"}
	};

	// delete a region
	regionFactory.delete = function(id) {

		return $http.delete(ApiEndpoint.url + '/regions/'+id);
	};

	// return our entire regionFactory object
	return regionFactory;

});