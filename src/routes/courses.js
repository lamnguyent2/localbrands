const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

//NewController.index
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);
router.get('/show/a/:slug', courseController.show);
router.get('/show/:slug', courseController.show2);
router.get('/shows/:slug', courseController.show3);
router.get('/showss/:slug', courseController.show4);
router.get('/add-to-cart/:id', courseController.addcart);
router.post('/createbl', courseController.createbl);
/* router.get('/', courseController.index); */


module.exports = router;