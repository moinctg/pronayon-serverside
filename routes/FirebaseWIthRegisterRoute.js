
// Image Routes

const express = require('express')
const router = express.Router()
const {postSignUP,putSignup}  = require('../controllers/FirebaseWithRegisterController')


// / use routers

router.route('/').post(postSignUP)
router.route('makeAdmin/').put(putSignup)








module.exports= router