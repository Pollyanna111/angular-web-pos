'use strict';

angular.module('webPosApp')
  .controller('Item_list_controller', function ($scope,$location) {
        $scope.cart_number = Cart.get_the_cart_number();
        $scope.go_to_main_page = function(){
            $location.path('/');
        };
        $scope.go_to_cart_page = function(){
            $location.path('/cart');
        };
        $scope.go_to_item_list_page = function(){
            $location.path('/item_list');
        };
        $scope.add_into_cart = function(name){
            Cart.add_item_to_cart(name);
            $scope.cart_number = Cart.get_the_cart_number();
        };
  });
