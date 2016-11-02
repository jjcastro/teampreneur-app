angular.module('starter.controllers', [])

.controller('ApplyCtrl', function($scope) {
  $scope.cards = [
  {
    img: 'img/max.png',
    name: 'Mike Perry',
    occupation: 'Ingeniero Civil',
    title: 'Teampreneur',
    subtitle: 'Plataforma para conectar emprendedores',
    description: 'Bacon ipsum dolor amet brisket chuck beef ribs filet mignon kevin bacon doner prosciutto leberkas t-bone pastrami swine. Pastrami chuck short loin filet mignon salami sausage ground round doner hamburger tail ball tip. Sirloin ham hock meatloaf beef ribs strip steak. Shankle cupim salami swine ribeye leberkas.',
    keywords: [
      'java',
      'desarrollo web',
      'desarrollo móvil',
      'cordova'
    ]
  },
  {
    img: 'img/mike.png',
    name: 'Marty McFly',
    occupation: 'Diseñador web',
    title: 'Lorem App',
    subtitle: 'Bacon ipsum dolor',
    description: 'Bacon ipsum dolor amet brisket chuck beef ribs filet mignon kevin bacon doner prosciutto leberkas t-bone pastrami swine. Pastrami chuck short loin filet mignon salami sausage ground round doner hamburger tail ball tip. Sirloin ham hock meatloaf beef ribs strip steak. Shankle cupim salami swine ribeye leberkas.',
  keywords: [
      'iphone',
      'ios',
      'apple',
      'android'
    ]
    },
];

$scope.cardDestroyed = function(index) {
  $scope.cards.splice(index, 1);
};

$scope.cardSwiped = function(index) {
  // var newCard = // new card data
  // $scope.cards.push(newCard);
};
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
