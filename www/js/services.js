angular.module('starter.services', [])

.factory('Projects', function() {

  var cards = [
    {
      id: 1,
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
      id: 2,
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

  return {
    all: function() {
      return cards;
    },
    get: function(cardId) {
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].id === parseInt(cardId)) {
          return cards[i];
        }
      }
      return null;
    }
  };

})

.factory('Applications', function() {
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
      'iphone',
      'ios',
      'apple',
      'android'
    ]
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
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
