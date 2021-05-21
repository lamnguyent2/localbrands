const express = require('express');
const router = express.Router();
const newController = require('../app/controllers/NewController');
//NewController.index
router.get('/category/:slug', newController.shownam);
router.get('/', newController.index);
router.get('/admin', newController.admins);
router.get('/adminsp', newController.adminsp);
router.get('/adminsps', newController.showsp);

module.exports = router;