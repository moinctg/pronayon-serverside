
//Team Routes 
const express = require('express')
const router = express.Router()
const {getTeam, postTeam, putTeam, deleteTeam} =require('../controllers/teamControllers')

router.route('/').get(getTeam).post(postTeam)
router.route('/:id').put(putTeam).delete(deleteTeam)

module.exports= router