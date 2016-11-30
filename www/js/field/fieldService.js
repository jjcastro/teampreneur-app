angular.module('fieldService', [])

.factory('Field', function($http, ApiEndpoint) {
	// create a new object
	var fieldFactory = {};


	// get multiple regions
	fieldFactory.getAll = function() {
		return $http.get(ApiEndpoint.url + '/fields/'); // returns an array of region objects, each of which contains id and name. You must save the id, otherwise when you want to update it you will need to change the backend
	};

        fieldFactory.getByRegion = function(idRegion) {
                return $http.get(ApiEndpoint.url + '/regions/' + idRegion + '/fields'); //returns an array of fields
        };

	// get a single field
	fieldFactory.get = function(id) {
		return $http.get(ApiEndpoint.url + '/fields/'+id); // returns something like this: "field": {    "id": 1,    "name": "aaaaaaaaa",    "region": 2  }
	};

	// create a field
	fieldFactory.create = function(fieldData, region_id) { // field that should look like this: {	"name": "Field Angelitos", 	"region" : 2}
		fieldData.region=region_id;
		return $http.post(ApiEndpoint.url + '/fields/', fieldData);
	};

	// update field
	fieldFactory.update = function(id, fieldData) {
		return $http.put(ApiEndpoint.url + '/fields/' + id, fieldData);
	};

	// delete a field
	fieldFactory.delete = function(id) {
		return $http.delete(ApiEndpoint.url + '/fields/' + id);
	};

	// return our entire fieldFactory object
	return fieldFactory;

});