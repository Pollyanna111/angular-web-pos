'use strict';

angular.module('webPosApp')
    .controller('Paying_controller', function ($scope,$location) {
        $scope.cart_number = Cart.get_the_cart_number();
        $scope.total_cost = Cart.total_cost().toFixed(2);
        $scope.money_saved = Cart.money_saved().toFixed(2);
        $scope.items = Cart.get_cart().bought_items;
        $scope.free_items = Cart.get_free_items();$scope.go_to_main_page = function(){
            $location.path('/');
        };
        $scope.go_to_cart_page = function(){
            $location.path('/cart');
        };
        $scope.go_to_item_list_page = function(){
            $location.path('/item_list');
        };
        $scope.choose_pay = function(){
            Cart.save_cart(new Cart());
            $location.path('/item_list');
        };
        $scope.time = get_the_current_time();
    });
