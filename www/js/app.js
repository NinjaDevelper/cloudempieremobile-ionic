// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'ngCordova.plugins.datawedge'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
     if (window.cordova &&
          window.cordova.plugins &&
          window.cordova.plugins.datawedge) {
        console.log('Plugin available');
      } else {
        console.log('Plugin not available');
      }

      if (window.cordova && window.cordova.plugins) {
    console.log('window.cordova.plugins is available');
  } else {
    console.log('window.cordova.plugins NOT available');
  }
    //document.addEventListener("deviceready", function(){ 
      if (window.datawedge) {
         window.cordova.plugins.datawedge.start(); //uses default
         //datawedge.start("com.yourintent.whatever_you_configured_to_broadcast_in_default_profile");
      }

      window.cordova.plugins.datawedge.registerForBarcode(function(data){
           var labelType = data.type,
               barcode   = data.barcode;

           console.log("Barcode scanned.  Label type is: " + labelType + ", " + barcode);

           //TODO: handle barcode/label type
       });
   //});

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'menuContent': {
          templateUrl: 'templates/dashboard.html',
          controller: 'DashboardCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/dashboard/:widgetlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.html',
        controller: 'DashboardCtrl'
      }
    }
  })
  .state('app.scan', {
      url: '/scan',
      views: {
        'menuContent': {
          templateUrl: 'templates/scan.html',
        controller: 'scanCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');
});


