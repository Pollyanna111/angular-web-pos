'use strict';

angular
  .module('webPosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'Main_controller'
      })
      .when('/item_list', {
        templateUrl: 'views/item_list.html',
        controller: 'Item_list_controller'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'Cart_controller'
      })
      .when('/paying', {
        templateUrl: 'views/paying.html',
        controller: 'Paying_controller'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
