const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index);
router.get('/demo', siteController.demo1);
router.get('/index', siteController.index2);
router.get('/index3', siteController.index3);
router.get('/max', siteController.max);
router.get('/min', siteController.min);
router.get('/moinhat', siteController.moinhat);
router.get('/thongke', siteController.thongke);
router.get('/bieudo', siteController.bieudo);
router.get('/profile/:name', siteController.profile);
router.get('/profile2/:name', siteController.profile2);
router.get('/adminuser', siteController.adminuser);
router.get('/showuser', siteController.showuser);
router.get('/edituser/:id', siteController.edit);
router.get('/editusers/:id', siteController.edit2);
router.put('/:id', siteController.update);
router.delete('/:id', siteController.destroy);
//đôi mật khẩu
router.get('/:id/doipass', siteController.doipass);
router.put('/updatepass/:id', siteController.updatepass);


module.exports = router;