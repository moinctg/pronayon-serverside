// Project Routes 

const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const {getTestimonial,postTestimonial,putTestomonial,deleteTestomonial} =require('../controllers/testimonialControllers')

router.route('/').get(getTestimonial).post(postTestimonial)
router.route('/:id').put(putTestomonial).delete(deleteTestomonial)
// router.get('/',getProject)
// router.post('/',postProject)
// router.put('/:id',putProject)
// router.delete('/:id',deleteProject)

module.exports = router