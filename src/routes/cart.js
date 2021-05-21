const express = require('express');
const router = express.Router();
const cartController = require('../app/controllers/CartController');
//NewController.index
router.get('/trucart/:id', cartController.trucart);
router.get('/congcart/:id', cartController.congcart);
router.get('/remove/:id', cartController.deletecart);
router.post('/createcart', cartController.create);
router.get('/ok', cartController.ok);
router.get('/adminhd', cartController.adminhd);
router.delete('/deletecart/:id', cartController.destroy);
router.get('/inhd/:id', cartController.inhd);

module.exports = router;