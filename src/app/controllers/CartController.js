const Shop = require('../models/Course');
const User = require('../models/User');
const Cart = require('../models/cart');
const Hoadon = require('../models/hoadon');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class CartController {
    trucart(req,res,next){
        const productId = req.params.id;
        const  cart = new Cart(req.session.cart ? req.session.cart : {});
        cart.trucart(productId);
        req.session.cart = cart;
        res.redirect('/me/cart');
    }

    congcart(req,res,next){
        const productId = req.params.id;
        const  cart = new Cart(req.session.cart ? req.session.cart : {});
        cart.congcart(productId);
        req.session.cart = cart;
        res.redirect('/me/cart');
    }

    deletecart(req,res,next){
        const productId = req.params.id;
        const  cart = new Cart(req.session.cart ? req.session.cart : {});
        cart.xoaitem(productId);
        req.session.cart = cart;
        res.redirect('/me/cart');
    }

    inhd(req,res,next){
        Hoadon.findOne({ _id: req.params.id }) //chi tiet san pham
                .then(hds => {
                    res.render('shopper/inhd', { hds: mongooseToObject(hds) });
                })
                .catch(next); 
    }

    create(req,res,next){
        const hoadons = new Hoadon(req.body);
        hoadons.save()
            .then(() => res.redirect('/cart/ok'))
            .catch(error => {

            });
    }

    ok(req,res,next){
        req.session.cart = null;
        res.render('shopper/ok');
    }  
    
    adminhd(req, res, next){
        Hoadon.find({})
            .then(hds => {
                res.render('admin/show_hd', { 
                    hds: mutipleMongooseToObject(hds),
                });
            })
            .catch(next);
            //res.render('admin/show_user');
    }

    destroy(req, res, next) { // PUT
        Hoadon.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next); // bắt lỗi
    }
}

module.exports = new CartController;