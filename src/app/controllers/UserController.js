const { mutipleMongooseToObject } = require('../../util/mongoose');
const passport = require('passport');
const User = require('../models/User');

passport.serializeUser(function(User, cb){
    cb(null, User.id);
})

/* passport.deserializeUser(function(id,cb){
    User.findById(id, function(err, User){
        cb(err, User);
    })
}) */

class UserController {
    // [GET] /news
    register(req, res, next) {
        const messages = req.flash('error');
        res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length >0});
        /* res.render('user/signup'); */
    }

    logins(req, res, next) {
        const messages = req.flash('error');
        res.render('user/signin', {'user':req.User,csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length >0});
    }

    logout(req, res, next) {
        req.logout();
        res.redirect('/');
    }

    isLoggedIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect('/',{'user':req.User});
    }

    notLoggedIn(req, res, next){
        if(!req.isAuthenticated()){
            return next();
        }
        res.redirect('/');
    }

    /* showuser(req, res, next) {
        Shop.findOne({ slug: req.params.slug }) //chi tiet san pham
            .then(shops => {
                res.render('courses/show', { shops: mongooseToObject(shops) });
                
            })
            .catch(next); 
        
    } */
}

module.exports = new UserController();