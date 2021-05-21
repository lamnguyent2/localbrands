const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');
const csrf = require('csurf');
const passport = require('passport');

const csrfProtection = csrf();

router.use(csrfProtection);
//NewController.index
router.get('/signup', userController.register);

router.post('/signups', passport.authenticate('local.signup', {
    successRedirect: '/user/signin',
    failureRedirect: '/user/signup',
    failureFlash: true
}));    

router.get('/signin', userController.logins);
router.post('/signins', passport.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: '/user/signin',
    failureFlash: true
}));
router.get('/logout', userController.logout);


module.exports = router;
