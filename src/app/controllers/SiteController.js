const Shop = require('../models/Course');
const Catalog = require('../models/Cate');
const Product = require('../models/product');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const Handlebars = require("handlebars");
const NumeralHelper = require("handlebars.numeral");
NumeralHelper.registerHelpers(Handlebars);
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const PAGE_SIZE = 9;


class SiteController {
    // [GET] /
    index(req, res, next) {   
        res.render('home');
    }
    index2(req, res, next) {
        var page = req.query.page;
        if(page){
            page = parseInt(page);
            var SoLuongBoQua = (page-1)*PAGE_SIZE;
            Catalog.find({})
                .then(catalogs => {
                    Shop.find({}).skip(SoLuongBoQua).limit(PAGE_SIZE)
                        .then(shops => {
                            res.json({ 
                                shops: mutipleMongooseToObject(shops),
                                catalogs: mutipleMongooseToObject(catalogs)
                            });
                        })
                })
                .catch(next);
        }else{
            // show all sản phẩm        
            Catalog.find({})
                .then(catalogs => {
                    Shop.find({})
                        .then(shops => {
                            res.json({ 
                                shops: mutipleMongooseToObject(shops),
                                catalogs: mutipleMongooseToObject(catalogs)
                            });
                        })
                })
                .catch(next);   
        } 
    }

    demo1(req, res, next) {
        Product.find({})
            .then(products => {
                res.json({ 
                    products: mutipleMongooseToObject(products)
                });
            })
            .catch(next);    
    }

    index3(req, res, next) {
        Catalog.find({})
            .then(catalogs => {
                res.json({ 
                    catalogs: mutipleMongooseToObject(catalogs)
                });                    
            })
            .catch(next);    
    }

    max(req, res, next) {
        var sort = {prices: -1};
        Catalog.find({})
            .then(catalogs => {
                Shop.find({}).sort(sort)
                    .then(shops => {
                        res.render('sapxep/productmax', { 
                            shops: mutipleMongooseToObject(shops),
                            catalogs: mutipleMongooseToObject(catalogs)
                        });
                    })
            })
            .catch(next);    
    }

    min(req, res, next) {
        var sort = {prices: 1};
        Catalog.find({})
            .then(catalogs => {
                Shop.find({}).sort(sort)
                    .then(shops => {
                        res.render('sapxep/productmin', { 
                            shops: mutipleMongooseToObject(shops),
                            catalogs: mutipleMongooseToObject(catalogs)
                        });
                    })
            })
            .catch(next);    
    }

    moinhat(req, res, next) {
        var sort = {_id: -1};
        Catalog.find({})
            .then(catalogs => {
                Shop.find({}).sort(sort)
                    .then(shops => {
                        res.render('sapxep/productnew', { 
                            shops: mutipleMongooseToObject(shops),
                            catalogs: mutipleMongooseToObject(catalogs)
                        });
                    })
            })
            .catch(next);    
    }

    // [GET] /search
    search(req, res, next){
            Catalog.find({})
            .then(catalogs => {
        if(req.query.q){
            var getQ = req.query.q;
            var q = getQ.replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g, '\\$&');
            console.log(q)
            try{
                    Shop.fuzzySearch(q, function (err, name) {
                    if(err) {
                        console.log(err)
                    }
                    res.render('search',{
                        name:mutipleMongooseToObject(name),
                        catalogs:mutipleMongooseToObject(catalogs)
                    })
                    });
            }
            catch{
                console.log(err)
            }
        }else {
            try{
                Shop.find({}, function (err, categories) {
                    if(err) console.log(err)
                     Shop.find({}, function (err, names) {
                      if(err) {
                        console.log(err)
                      }
                      res.render('search', {
                        name:names
                      })
                    });
                  })
            }
            catch{
                console.log(err)
            }
        }
    })
    .catch(next); 
    }

    thongke(req, res, next) { // PUT
        var sort = {prices: -1};
        var sort2 = {prices: 1};
        Shop.find({}).sort(sort2).limit(1)
        .then(shopss => {
            Shop.count({})
                .then(shop => {
                    Shop.find({}).sort(sort).limit(1)        
                        .then(shops => {
                            /* res.json({ 
                                shops: mutipleMongooseToObject(shops),
                                shop:shop
                            }); */
                            res.render('admin/thongke',{ 
                                shops: mutipleMongooseToObject(shops),
                                shop:shop,
                                shopss:mutipleMongooseToObject(shopss)
                            });
                        })  
                }) 
        })
            .catch(next);          
    }

    bieudo(req, res, next) { // PUT
        Shop.find({})
            .then(shops => {
                res.render('admin/bieudotk',{ 
                    shops: mutipleMongooseToObject(shops),
                });
            })
            .catch(next);          
    }

    profile(req, res, next) {
        User.findOne({ name: req.params.name })
            .then(users => {
                res.render('user/profile', { users: mongooseToObject(users) });               
            })
            .catch(next);
    }

    profile2(req, res, next) {
        User.findOne({ name: req.params.name })
            .then(users => {
                res.json({ users: mongooseToObject(users) });              
            })
            .catch(next);
    }

    adminuser(req, res, next){
        /* User.find({})
            .then(users => {
                res.render('admin/show_user', { 
                    users: mutipleMongooseToObject(users),
                });
            })
            .catch(next); */
            res.render('admin/show_user');
    }
    showuser(req, res, next){
        User.find({})
            .then(users => {
                res.json({ 
                    users: mutipleMongooseToObject(users),
                });
            })
            .catch(next);
    }

    // Sửa tài khoản
    edit(req, res, next) {
        /* User.findById(req.params.id)
            .then(users => {
                res.render('user/edit', { 
                    users: mongooseToObject(users)
                });
            })
            .catch(next);  */
            res.render('user/edit');
    }
    update(req, res, next) { // PUT
        User.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/adminuser'))
            .catch(next);
    }
    edit2(req, res, next) {
        User.findOne({ _id: req.params.id }) //chi tiet san pham
            .then(users => {
                res.json({ users: mongooseToObject(users) });
            })
            .catch(next);
    }

    // đổi mật khẩu
    doipass(req, res, next) {
        User.findById(req.params.id)
            .then(users => {
                res.render('user/doipass', { 
                    users: mongooseToObject(users)

                });
            })
            .catch(next); 
    }
    updatepass(req, res, next) { // PUT
        User.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/'))
            .catch(next);
    }

    // Xóa tài khoản
    destroy(req, res, next) { // PUT
        User.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next); // bắt lỗi
    }
}

module.exports = new SiteController();