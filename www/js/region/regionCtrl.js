angular.module('regionCtrl', [])

.controller('regionController',function(Region, $scope) {

  var vm = this;

  // set a processing variable to show loading things
  vm.processing = true;

  $scope.omg='omg';

  console.log('region-ctrl');

  // grab all the regions at page load
  Region.getAll()
    .success(function(data) {
      console.log('regions-recieved');
      console.log(data);
      // when all the Regions come back, remove the processing variable
      vm.processing = false;

      // bind the Regions that come back to vm.Regions
      vm.regions = data;


    });

  // function to delete a Region
  vm.deleteRegion = function(id) {
    vm.processing = true;

    Region.delete(id)
      .success(function(data) {

        if(data.name === 'error') {
          alert('ERROR: ' + data.detail);
        }

        // get all Regions to update the table
        // you can also set up your api 
        // to return the list of Regions with the delete call
        Region.getAll()
          .success(function(data) {
            vm.processing = false;
            vm.regions = data;
          });

      });
  };

})

// controller applied to region creation page
.controller('regionCreateController', function($state, Region, $stateParams) {
	
	var vm = this;

	// variable to hide/show elements of the view
	// differentiates between create or edit pages
	vm.type = 'create';

	// function to create a Region
	vm.saveRegion = function() {
		console.log('create');
		vm.processing = true;
		vm.message = '';
		// use the create function in the RegionService
		Region.create(vm.regionData)
			.success(function(data) {
				vm.processing = false;
				vm.regionData = {};
				vm.message = data.message;
				$state.go('regions');
			});
			
	};	

})

// controller applied to Region edit page
.controller('regionEditController', function($stateParams, Region) {
	
	var vm = this;

	// variable to hide/show elements of the view
	// differentiates between create or edit pages
	vm.type = 'edit';

	// get the Region data for the Region you want to edit
	// $routeParams is the way we grab data from the URL
	Region.get($stateParams.region_id)
		.success(function(data) {
			vm.regionData = data;
		});

	// function to save the Region
	vm.saveRegion = function() {
		vm.processing = true;
		vm.message = '';

		// call the RegionService function to update 
		Region.update($stateParams.region_id, vm.regionData)
			.success(function(data) {
				
				vm.processing = false;

				// clear the form
				vm.regionData = {};
				// bind the message from our API to vm.message
				vm.message = data.message;
				$state.go('regions');
			});
	};

});