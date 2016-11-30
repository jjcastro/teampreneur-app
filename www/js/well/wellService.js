angular.module('wellService', [])

.factory('Well', function($http, ApiEndpoint) {

	// create a new object
	var wellFactory = {};
        
        wellFactory.getAll = function() {
            return $http.get(ApiEndpoint.url + '/wells');
        };
	// get a single well
	wellFactory.get = function(id) {
		return $http.get(ApiEndpoint.url + '/wells/' + id);
	};
        
        wellFactory.getByRegionAndField = function(idRegion, idField) {
            return $http.get(ApiEndpoint.url + '/regions/' + idRegion + '/fields/' + idField+'/wells');
        };

	// create a well
	wellFactory.create = function(wellData, field_id) {
		wellData.field_id=field_id;
		return $http.post(ApiEndpoint.url + '/wells/', wellData);
	};

	// update well
	wellFactory.update = function(id, wellData) {
		return $http.put(ApiEndpoint.url + '/wells/' + id, wellData);
	};

	// delete a well
	wellFactory.delete = function(id) {
		return $http.delete(ApiEndpoint.url + '/wells/' + id);
	};

	// return our entire wellFactory object
	return wellFactory;

});