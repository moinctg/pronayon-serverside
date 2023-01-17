const express = require('express')
const router = express.Router()
const {getProject, postProject, putProject, deleteProject} =require('../controllers/projectController')

router.route('/').get(getProject).post(postProject)
router.route('/:id').put(putProject).delete(deleteProject)
// router.get('/',getProject)
// router.post('/',postProject)
// router.put('/:id',putProject)
// router.delete('/:id',deleteProject)



module.exports= router