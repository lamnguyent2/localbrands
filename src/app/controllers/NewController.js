const Shop = require('../models/Course');
const Catalog = require('../models/Cate');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const PAGE_SIZE = 6;

class NewController {
    // [GET] /news
    index(req, res, next) {
                Shop.find({})
                .then(shops => {
                    res.render('news', { 
                        shops: mutipleMongooseToObject(shops) 
                    });
                    
                })
                .catch(next);     
    }

    // [GET] /news/:slug, slug là nhận nhiều giá trị ngẫu nhiên torng mục news
    shownam(req, res, next){
        const regex = new RegExp(req.params.slug, 'i');
        Catalog.find({})
            .then(catalogs => {
                Shop.find({category:regex})
                    .then((result) =>{
                        res.status(200).render('category/catalog',{
                            result:mutipleMongooseToObject(result),
                            catalogs:mutipleMongooseToObject(catalogs)
                        });
                    })
                })
                .catch(next);
    }

    admins(req, res){
        res.render('admin');
    }

    adminsp(req, res, next){
        res.render('admin/show_pro');
    }

    showsp(req, res, next){
        var page = req.query.page;
        if(page){
            page = parseInt(page);
            var SoLuongBoQua = (page-1)*PAGE_SIZE;
            Shop.find({}).skip(SoLuongBoQua).limit(PAGE_SIZE)
                .then(shops => {
                    res.json({ 
                        shops: mutipleMongooseToObject(shops),
                    });
                })
                .catch(next);
        }else{
            Shop.find({})
                .then(shops => {
                    res.json({ 
                        shops: mutipleMongooseToObject(shops),
                    });
                })
                .catch(next);
        }
    }
}

module.exports = new NewController;