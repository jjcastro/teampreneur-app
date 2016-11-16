angular.module('starter.services', [])

.factory('Account', function($http, ApiEndpoint, Auth) {
  return {
    update: function(user) {
      return $http.put(ApiEndpoint.url + '/me', user);
    },
    getUserKeywords: function() {
      return $http.get(ApiEndpoint.url + '/keywords/user');
    },
    addKeyword: function(item) {
      return $http.post(ApiEndpoint.url + '/keywords/user', item);
    },
    removeKeyword: function(item) {
      return $http.delete(ApiEndpoint.url + '/keywords/user', item);
    }
  };
})

.factory('Projects', function($http, ApiEndpoint, Auth) {

  return {
    all: function() {
      return $http.get(ApiEndpoint.url + '/projects/offers');

    },
    get: function(cardId) {
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].id === parseInt(cardId)) {
          return cards[i];
        }
      }
      return null;
    },
    getKeywords: function(projectId) {
      return $http.get(ApiEndpoint.url + '/projects/' + projectId + '/keywords');
    },
    getRelevantKeywords: function(projectId) {
      return $http.get(ApiEndpoint.url + '/projects/' + projectId + '/keywords/relevant');
    },
  };

})

.factory('Applications', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var applications = [{
    id: 0,
    img: 'img/mike.png',
    name: 'Marty McFly',
    occupation: 'Diseñador web',
    title: 'Lorem App',
    subtitle: 'Bacon ipsum dolor',
    description: 'Bacon ipsum dolor amet brisket chuck beef ribs filet mignon kevin bacon doner prosciutto leberkas t-bone pastrami swine. Pastrami chuck short loin filet mignon salami sausage ground round doner hamburger tail ball tip. Sirloin ham hock meatloaf beef ribs strip steak. Shankle cupim salami swine ribeye leberkas.',
  keywords: [
      {
          name: 'iphone',
          relevant: true,
        },
        {
          name: 'ios',
          relevant: true,
        },
        {
          name: 'apple',
          relevant: true,
        },
        {
          name: 'android',
          relevant: true,
        },
        {
          name: 'backend',
          relevant: false,
        },
        {
          name: 'finanzas',
          relevant: false,
        },
        {
          name: 'administración',
          relevant: false,
        },
        {
          name: 'diseño',
          relevant: false,
        },
        {
          name: 'bilingüe',
          relevant: false,
        },
        {
          name: 'ti',
          relevant: false,
        },
        {
          name: 'gerente',
          relevant: false,
        },
        {
          name: 'administración',
          relevant: false,
        },
        {
          name: 'diseño',
          relevant: false,
        },
        {
          name: 'bilingüe',
          relevant: false,
        },
        {
          name: 'ti',
          relevant: false,
        },
        {
          name: 'gerente',
          relevant: false,
        },
    ]
  }];

  return {
    all: function() {
      return applications;
    },
    remove: function(application) {
      applications.splice(applications.indexOf(chat), 1);
    },
    get: function(applicationId) {
      for (var i = 0; i < applications.length; i++) {
        if (applications[i].id === parseInt(applicationId)) {
          return applications[i];
        }
      }
      return null;
    }
  };
});
