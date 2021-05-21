const express = require('express');
const router = express.Router();
const cateController = require('../app/controllers/CateController');

//NewController.index
router.post('/store', cateController.store);
router.get('/edit/a/:slug', cateController.edit);
router.get('/edit/:slug', cateController.edit2);
router.put('/:id', cateController.update);
router.delete('/:id', cateController.destroy);
router.get('/admincate', cateController.admincate);
router.get('/admincates', cateController.showcate);


module.exports = router;