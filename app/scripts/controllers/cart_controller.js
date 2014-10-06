'use strict';

angular.module('webPosApp')
    .controller('Cart_controller', function ($scope,$location) {
        var refresh_the_cart = function(){
            $scope.cart_number = Cart.get_the_cart_number();
            $scope.total_cost = Cart.total_cost().toFixed(2);
            $scope.items = Cart.get_cart().bought_items;
        };
        refresh_the_cart();
        $scope.go_to_main_page = function(){
            $location.path('/');
        };
        $scope.go_to_cart_page = function(){
            $location.path('/cart');
        };
        $scope.go_to_item_list_page = function(){
            $location.path('/item_list');
        };
        $scope.go_to_paying_page = function(){
            $location.path('/paying');
        };
        $scope.cut_item = function(name){
            Cart.cut_item_from_cart(name);
            if(Cart.get_the_cart_number() === 0){
                $location.path('/item_list');
            }
            refresh_the_cart();
        };
        $scope.add_item = function(name){
            Cart.add_item_to_cart(name);
            refresh_the_cart();
        };
        $scope.show_the_promotion = function(free_number){
            return (free_number !== 0);
        }
    });