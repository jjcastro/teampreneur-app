angular.module('starter.controllers', [])

.controller('ApplyCtrl', function($scope, Projects) {
  
  $scope.cards = Projects.all();

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.cardSwiped = function(index) {
    // var newCard = // new card data
    // $scope.cards.push(newCard);
  };
})

.controller('ApplicationsCtrl', function($scope, Applications) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.applications = Applications.all();
  $scope.remove = function(application) {
    Applications.remove(application);
  };
})

.controller('ApplicationDetailCtrl', function($scope, $stateParams, Applications) {
  $scope.app = Applications.get($stateParams.applicationId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
