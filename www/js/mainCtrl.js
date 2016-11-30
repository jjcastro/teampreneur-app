angular.module('mainCtrl', [])

.controller('mainController', function($rootScope, $state, Auth) {

  var vm = this;

  // get info if a person is logged in
  vm.loggedIn = Auth.isLoggedIn();

  // check to see if a user is logged in on every request
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    vm.loggedIn = Auth.isLoggedIn();  
    
    if (toState.name == 'login' && vm.loggedIn) {
      event.preventDefault();
      $state.go('tab.regions');
    }
    else if (toState.name !== 'login' && !vm.loggedIn) {
      event.preventDefault();
      $state.go('login');
    }

    // get user information on page load
    Auth.getUser()
      .then(function(data) {

        var user = data.data;
        if(user.user_type === 1) {
          user.type = "Jefe de Campo";
        }
        else if(user.user_type === 2) {
          user.type = "Jefe de Producción";
        }
        console.log(user);

        vm.user = user;
      }); 
  }); 

  // function to handle login form
  vm.doLogin = function() {
    vm.processing = true;

    console.log(vm.loginData.username);
    console.log(vm.loginData.password);

    // clear the error
    vm.error = '';

    Auth.login(vm.loginData.username, vm.loginData.password)
      .success(function(data) {

        console.log(data);
        vm.processing = false;      

        // if a user successfully logs in, redirect to users page
        if (data.success)     
          $state.go('tab.regions');
        else 
          vm.error = data.message;
        
      });
  };

  // function to handle logging out
  vm.doLogout = function() {
    Auth.logout();
    vm.user = '';
    
    $state.go('login');
  };

  vm.createSample = function() {
    Auth.createSampleUser();
  };

  vm.openDialogA = function() { vm.dialogOpenA = true; };
  vm.closeDialogA = function() { vm.dialogOpenA = false; };
  vm.openDialogB = function() { vm.dialogOpenB = true; };
  vm.closeDialogB = function() { vm.dialogOpenB = false; };

});
