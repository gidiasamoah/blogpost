const express = require('express')
const controllers = require('../controllers/blogControllers');

const router = express.Router()

router.post('/', controllers.addPost);
router.get('/', controllers.getPost);
router.put('/:id', controllers.updatePost); 
router.put('/:id', controllers.deletePost); 

module.exports = router;