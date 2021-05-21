module.exports =  function Cart(oldCart){
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    this.totalitemPrice = oldCart.totalitemPrice || 0;

    // Cộng cart
    this.congcart = function(item, id) {
        var storedItem = this.items[id];
        storedItem.qty++;        
        storedItem.prices = storedItem.item.prices * storedItem.qty; 
        this.totalQty++;   
        this.totalPrice +=storedItem.item.prices;
    }

    // Trừ cart
    this.trucart = function(item, id) {
        var storedItem = this.items[id];
        storedItem.qty++;        
        storedItem.prices = storedItem.item.prices * storedItem.qty; 
        this.totalQty++;   
        this.totalPrice +=storedItem.item.prices;
    }
};