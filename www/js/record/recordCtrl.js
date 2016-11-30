angular.module('recordCtrl', ['recordService'])

.controller('recordController', function($stateParams, Record) {
	console.log('recordCtrl')
	var vm=this;

	//set a processing var to show loading things
	vm.processing = true;
	vm.sensor_id=$stateParams.sensor_id;

	Record.getBySensor($stateParams.sensor_id)
		.success(function(data) {

			// when all the sensors come back, remove the processing variable
			vm.processing = false;

			// bind the sensors that come back to vm.sensors
			vm.records = data;
		});

});