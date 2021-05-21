const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');
//NewController.index
router.get('/stored/courses', meController.storedCourses);
router.get('/show', meController.showproo);
router.get('/trash/courses', meController.trashCourses);
router.get('/trash', meController.trashs);
router.get('/cart', meController.buycart);

module.exports = router;