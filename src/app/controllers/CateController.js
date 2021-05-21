const Shop = require('../models/Course');
const Catalog = require('../models/Cate');

const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { replaceOne } = require('../models/Course');


class CateController {

    admincate(req, res, next){
            res.render('admin/show_cate');
    }

    showcate(req, res, next){
        Catalog.find({})
            .then(catalogs => {
                res.json({ 
                    catalogs: mutipleMongooseToObject(catalogs)
                });
            })
            .catch(next);
    }

    // Thêm danh mục
    store(req, res, next) {
        const catalogs = new Catalog(req.body);
        catalogs.save()
            .then(() => res.redirect('/catalogs/admincate'))
            .catch(error => {

            });
    }

    // Sửa danh mục
    edit(req, res, next) {
        /* Catalog.findById(req.params.id)
        .then(catalogs => {
            res.render('category/edit', { catalogs: mongooseToObject(catalogs) });
        })
        .catch(next);  */
        res.render('category/edit');
    }
    edit2(req, res, next) {
        Catalog.findOne({ slug: req.params.slug }) //chi tiet san pham
            .then(catalogs => {
                res.json({ catalogs: mongooseToObject(catalogs) });
            })
            .catch(next);
       /*  res.render('courses/edit'); */
    }
    update(req, res, next) { // PUT
        Catalog.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/catalogs/admincate'))
            .catch(next);
    }

    // Xóa danh mục
    destroy(req, res, next) { // PUT
        Catalog.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next); // bắt lỗi
    }
}

module.exports = new CateController;