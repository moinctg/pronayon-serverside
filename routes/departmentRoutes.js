// Department  Routes

const express = require('express')
const router = express.Router()
const  {getDepartment,postDepartment,putDepartment,deleteDepartment}  = require('../controllers/departmentController')


// / use routers






router.route('/').get(getDepartment).post(postDepartment)
router.route('/:id').put(putDepartment).delete(deleteDepartment)

module.exports= router