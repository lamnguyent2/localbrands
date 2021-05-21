const Shop = require('../models/Course');
const Catalog = require('../models/Cate');
const Comment = require('../models/comment');

const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { replaceOne } = require('../models/Course');


class CommentController {

    showcomment(req, res, next) {
        Comment.find({})
            .then(comments => {
                res.render('admin/show_comment', { 
                    comments: mutipleMongooseToObject(comments)
                });
            })
            .catch(next);    
    }
    destroy(req, res, next) { // PUT
        Comment.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next); // bắt lỗi
    }
}

module.exports = new CommentController;