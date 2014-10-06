function Cart(){
    this.bought_items = {};
}

Cart.add_item_to_cart = function(name){
    var items = Item.get_all_item();
    var item = new Item(items[name].kind,name,items[name].unit,items[name].price);
    item.put_to_order();
};

Cart.get_the_cart_number = function(){
    var cart = Cart.get_cart(),num = 0;
    if(_(cart.bought_items).keys()){
        _(_(cart.bought_items).keys()).each(function(item_name){
            num += cart.bought_items[item_name].count;
        });
    }
    return num;
};

Cart.get_cart = function(){
    return JSON.parse(localStorage.getItem('cart')) || new Cart();
};

Cart.save_cart = function(cart){
    cart.bought_items = Cart.delete_item(cart);
    localStorage.setItem('cart',JSON.stringify(cart));
};

Cart.delete_item = function(cart){
    var skip;
    _(_(cart.bought_items).keys()).each(function(item){
        if(cart.bought_items[item].count === 0){
            skip = item;
        }
    });
    return _(cart.bought_items).omit(skip);
};

Cart.cut_item_from_cart = function(name){
    var cart = Cart.get_cart();
    if(cart.bought_items[name].count === 0){
        return;
    }
    cart.bought_items[name].count--;
    _(loadPromotions()).each(function(name) {
        if(cart.bought_items[name]){
            cart.bought_items[name].free_number = Math.floor(cart.bought_items[name].count / 3);
        }
    });
    localStorage.setItem('cart',JSON.stringify(cart));
};

Cart.recompute_it_with_promotion = function(cart){
    _(loadPromotions()).each(function(name) {
        if(cart.bought_items[name]){
            cart.bought_items[name].free_number = Math.floor(cart.bought_items[name].count / 3);
        }
    });
    Cart.save_cart(cart);
};

Cart.money_saved = function(){
    var money_saved = 0, cart = Cart.get_cart();
    _(_(cart.bought_items).keys()).each(function(item_name) {
        if(cart.bought_items[item_name].free_number !== 0 ){
            money_saved += cart.bought_items[item_name].free_number * cart.bought_items[item_name].price;
        }
    });
    return money_saved;
};

Cart.total_cost = function(){
    var total_cost = 0, cart = Cart.get_cart();
    _(_(cart.bought_items).keys()).each(function(item_name){
        total_cost += (cart.bought_items[item_name].count-cart.bought_items[item_name].free_number)*cart.bought_items[item_name].price;
    });
    return total_cost;
};

Cart.show_the_promotion_price = function(name){
    var cart = Cart.get_cart(),text;
    if(cart.bought_items[name].free_number === 0){
        text = (cart.bought_items[name].price*cart.bought_items[name].count+'元');
    }else {
        text = (cart.bought_items[name].price * (cart.bought_items[name].count - cart.bought_items[name].free_number) + '元(原价：' + cart.bought_items[name].price * cart.bought_items[name].count + '元)');
    }
    return text;
};

Cart.get_free_items = function(){
    var cart = Cart.get_cart(), free_items = {};
    _(_(cart.bought_items).keys()).each(function(item_name){
        if(cart.bought_items[item_name].free_number !== 0 ){
            free_items[item_name] = cart.bought_items[item_name];
        }
    });
    return free_items;
};
