const Cart = require('../models/cart');
const Shop = require('../models/Course');
const Catalog = require('../models/Cate');
const Comment = require('../models/comment');

const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { replaceOne } = require('../models/Course');
var handlebars = require('handlebars');
handlebars.registerHelper('date', require('helper-date'));


class CourseController {
    // [GET] / :slug
    show(req, res, next) {
        res.render('courses/show');    
    }

    show2(req, res, next) {
        Shop.findOne({ slug: req.params.slug }) //chi tiet san pham
            .then(shops => {
                res.json({ shops: mongooseToObject(shops) });
            })
            .catch(next);       
    }

    show3(req, res, next) {
        Comment.find({ idsp: req.params.slug }) //chi tiet san pham
            .then(bls => {
                res.json({ 
                    bls: mutipleMongooseToObject(bls)
                });                          
            })
            .catch(next);       
    }

    show4(req, res, next) {
        Shop.findOne({ slug: req.params.slug }) //chi tiet san pham
            .then(shops => {
                res.json({ shops: mongooseToObject(shops) });
            })
            .catch(next);       
    }

    // Thêm sản phẩm
    create(req, res, next) {
        Catalog.find({})
                .then(catalogs => {
                    res.render('courses/create', { 
                        catalogs: mutipleMongooseToObject(catalogs) 
                    });
                    
                })
                .catch(next); 
        /* res.render('courses/create'); */
    }
    store(req, res, next) {
        /* res.json(req.body); */
        const shops = new Shop(req.body);
        shops.save()
            .then(() => res.redirect('/news/adminsp'))
            .catch(error => {

            });
    }

    // Sửa sản phẩm
    edit(req, res, next) {
        
        Catalog.find({})
            .then(catalogs => {
                Shop.findOne({ _id: req.params.id })
                .then(shops => {
                    res.render('courses/edit', { 
                        shops: mongooseToObject(shops),
                        catalogs:mutipleMongooseToObject(catalogs) 
                    });
                })
            })
        .catch(next); 
       /*  res.render('courses/edit'); */
    }

    edit2(req, res, next) {
        
        Catalog.find({})
            .then(catalogs => {
                Shop.findById(req.params.id)
                .then(shops => {
                    res.json({ 
                        shops: mongooseToObject(shops),
                        catalogs:mutipleMongooseToObject(catalogs) 
                    });
                })
            })
        .catch(next); 
       /*  res.render('courses/edit'); */
    }

    update(req, res, next) { // PUT
        Shop.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/news/adminsp'))
            .catch(next);
    }

    // Xóa sản phẩm
    destroy(req, res, next) { // PUT
        Shop.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next); // bắt lỗi
    }

    // Xóa sản phẩm vĩnh viễn
    forceDestroy(req, res, next) { // PUT
        Shop.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next); // bắt lỗi
    }

    // [PATCH] restore sản phẩm
    restore(req, res, next) { // PUT
        Shop.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // Add to cart
    addcart(req, res, next) { // PUT
        const productId = req.params.id;
        const  cart = new Cart(req.session.cart ? req.session.cart : {});
        Shop.findById(productId, function(err, shop){
            if(err){
                return res.redirect('/');
            }
            cart.add(shop, shop.id);
            req.session.cart = cart;
            console.log(req.session.cart);
            res.redirect('/');
        });
    }
    
    createbl(req, res, next) {
        const comments = new Comment(req.body);
        comments.save()
            .then(() => res.redirect('back'))
            .catch(error => {

            });
    }
}

module.exports = new CourseController;