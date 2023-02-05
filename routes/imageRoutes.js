
// Image Routes

const express = require('express')
const router = express.Router()
const imageController  = require('../controllers/imageController')


// / use routers
router.post('/', imageController.upload , imageController.postImage)

router.get('/', imageController.getImage)







// router.route('/').get(getImage).post(postImage.upload)
// router.route('/:id').put(putImage).delete(deleteImage)

module.exports= router