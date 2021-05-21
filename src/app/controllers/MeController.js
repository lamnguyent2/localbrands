const Shop = require('../models/Course');
const Cart = require('../models/cart');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next){
            res.render('me/store');  
    }

    showproo(req, res, next){
        Shop.find({})
            .then(shops => {
                res.json({ 
                    shops: mutipleMongooseToObject(shops) 
                });
            })
            .catch(next); 
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next){
        res.render('me/trash');
    }

    trashs(req, res, next){
        Shop.findDeleted({})
            .then(shops => {
                res.json({ 
                    shops: mutipleMongooseToObject(shops) 
                });
            })
            .catch(next); 
    }

    buycart(req, res, next) { // 
        if(!req.session.cart){
            return res.render('shopper/shopping-cart', {shop:null});
        }
        const cart = new Cart(req.session.cart);
        res.render('shopper/shopping-cart', {shop: cart.generateArray(), totalPrice: cart.totalPrice});
        /* res.render('shopper/shopping-cart'); */
    }
}

module.exports = new MeController();