// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 
  'authService', 
  'mainCtrl',
  'regionCtrl',
  'regionService',
  'fieldCtrl',
  'fieldService',
  'wellCtrl',
  'wellService', 
  'reportCtrl', 
  'reportService', 
  'sensorCtrl',
  'sensorService',
  'recordCtrl',
  'recordService'])

.constant('ApiEndpoint', {
  url: 'http://localhost:8100/api'
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      // StatusBar.styleDefault();
      StatusBar.overlaysWebView(true);
      StatusBar.styleLightContent(); //Light
    }
  });
})

// application configuration to integrate token into requests
.config(function($httpProvider) {

  // attach our auth interceptor to the http requests
  $httpProvider.interceptors.push('AuthInterceptor');

})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.regions', {
      url: '/regions',
      views: {
        'tab-regions': {
          templateUrl: 'templates/tab-regions.html',
          controller: 'regionController as region'
        }
      }
    })
    .state('tab.fields', {
        url: '/regions/:region_id/fields',
        views: {
          'tab-regions': {
            templateUrl: 'templates/fields.html',
            controller: 'fieldController as field'
          }
        }
      })
    .state('tab.wells', {
        url: '/regions/:region_id/fields/:field_id/wells',
        views: {
          'tab-regions': {
            templateUrl: 'templates/wells.html',
            controller: 'wellController as well'
          }
        }
      })
    .state('tab.sensors', {
        url: '/regions/:region_id/fields/:field_id/wells/:well_id/sensors',
        views: {
          'tab-regions': {
            templateUrl: 'templates/sensors.html',
            controller: 'sensorController as sensor'
          }
        }
      })
    .state('tab.records', {
        url: '/regions/:region_id/fields/:field_id/wells/:well_id/sensors/:sensor_id/records',
        views: {
          'tab-regions': {
            templateUrl: 'templates/records.html',
            controller: 'recordController as record'
          }
        }
      })

  .state('tab.reports', {
      url: '/reports',
      views: {
        'tab-reports': {
          templateUrl: 'templates/tab-reports.html',
          controller: 'reportController as report'
        }
      }
    })
    .state('tab.application-detail', {
      url: '/applications/:applicationId',
      views: {
        'tab-reports': {
          templateUrl: 'templates/application-detail.html',
          controller: 'ApplicationDetailCtrl'
        }
      }
    })

  .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'AccountCtrl'
      }
    }
  })

  // login

  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/regions');

});
