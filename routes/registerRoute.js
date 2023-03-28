
//Team Routes 
const express = require('express')
const router = express.Router()
const {getRegister, postRegister, putTeam, deleteTeam} =require('../controllers/registerController')

router.route('/').get(getRegister).post(postRegister)
// router.route('/:id').put(putTeam).delete(deleteTeam)

module.exports= router