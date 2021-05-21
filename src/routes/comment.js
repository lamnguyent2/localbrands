const express = require('express');
const router = express.Router();
const commentController = require('../app/controllers/CommentController');

router.get('/showcomment', commentController.showcomment);
router.delete('/xoacm/:id', commentController.destroy);
module.exports = router;