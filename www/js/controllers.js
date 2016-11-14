angular.module('starter.controllers', [])

.controller('ApplyCtrl', function($scope, Projects, $ionicModal) {
  
  Projects.all()
    .success(function(data) {
      console.log(data);
      $scope.cards = data;

      Projects.getKeywords(data[0].id)
        .success(function(data) {
          $scope.cards[0].keywords = data;
        });
    });

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
    
    if($scope.cards.length !== 0) {
      $scope.cards[0].id
    }
  };

  $scope.cardSwiped = function(index) {
    // var newCard = // new card data
    // $scope.cards.push(newCard);
  };

  $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
   }).then(function(modal) {
      $scope.modal = modal;
   });
  
   $scope.openModal = function(card) {
      $scope.openCard = card;
      $scope.modal.show();
   };
  
   $scope.closeModal = function() {
      $scope.modal.hide();
   };
  
   //Cleanup the modal when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.modal.remove();
   });
  
   // Execute action on hide modal
   $scope.$on('modal.hidden', function() {
      // Execute action
   });
  
   // Execute action on remove modal
   $scope.$on('modal.removed', function() {
      // Execute action
   });
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
