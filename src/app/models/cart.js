module.exports =  function Cart(oldCart){
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    this.totalitemPrice = oldCart.totalitemPrice || 0;

    this.add = function(item, id) {
        var storedItem = this.items[id];
        //var nameItem = this.items.name;
        if(!storedItem){
            storedItem = this.items[id] = {item: item, qty: 0, prices: 0};
        }  
        storedItem.qty++;        
        storedItem.prices = storedItem.item.prices * storedItem.qty; 
        this.totalQty++;   
        this.totalPrice +=storedItem.item.prices;
    }

    this.generateArray = function() {
        const arr = [];
        for (const id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    }

    this.trucart = function(id) {
        this.items[id].qty--;
        this.items[id].prices -= this.items[id].item.prices;
        this.totalQty--;
        this.totalPrice -= this.items[id].item.prices;

        if(this.items[id].qty <=0){
            delete this.items[id];
        }
    }

    this.congcart = function(id) {
        this.items[id].qty++;
        this.items[id].prices += this.items[id].item.prices;
        this.totalQty++;
        this.totalPrice += this.items[id].item.prices;
    }

    this.xoaitem = function(id){
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].prices;
        delete this.items[id];
    }
};