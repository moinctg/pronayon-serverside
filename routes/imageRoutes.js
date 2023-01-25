const express = require('express')
const router = express.Router()
const {getImage, postImage, putImage, deleteImage} =require('../controllers/imageController')

router.route('/').get(getImage).post(postImage)
router.route('/:id').put(putImage).delete(deleteImage)

module.exports= router