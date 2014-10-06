function Item(kind, name, unit, price) {
    this.kind = kind;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
    this.count = 0;
    this.free_number = 0;
}

Item.get_all_item = function(){
    return {
        '可口可乐':{kind:'饮料',unit:'瓶',price:'3'},
        '雪碧':{kind:'饮料',unit:'瓶',price:'3'},
        '苹果':{kind:'水果',unit:'斤',price:'5.5'},
        '荔枝':{kind:'水果',unit:'斤',price:'15'},
        '电池':{kind:'生活用品',unit:'个',price:'2'},
        '方便面':{kind:'食品',unit:'袋',price:'4.5'}
    }
};

Item.prototype.put_to_order = function(){
    var cart = Cart.get_cart();
    cart.bought_items[this.name] = cart.bought_items[this.name] || this;
    cart.bought_items[this.name].count++;
    Cart.recompute_it_with_promotion(cart);
};

