
// Department Controller 
const asyncHandeler = require('express-async-handler')
const Department = require('../models/departmentModel')



const getDepartment = asyncHandeler(async (req, res) => {
    const department = await Department.find()
    res.status(200).json(department)
})
const postDepartment = asyncHandeler(async (req, res) => {
    if (!req.body) {
        res.status(400)
        throw new Error('pls add a file');
    }
    const department = await Department.create({
        name: req.body.name,
        description: req.body.description,
        // department: req.body.department,









    })
   
    department.save()
    res.status(200).json(department)
})
const putDepartment = asyncHandeler(async (req, res) => {
    const department = await Department.findById(req.params.id)
    if (!department) {
        res.status(400)
        throw new Error('Department not found')

    }
    const updateDepartment = await Department.findById(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updateDepartment)
})
const deleteDepartment = asyncHandeler(async (req, res) => {
    const department = await Department.findById(req.params.id)
    if (!department) {
        res.status(400)
        throw new Error('Department not found')

    }
    await department.remove()
    res.status(200).json({ id: req.params.id })
})






module.exports = {

    getDepartment,
    postDepartment,
    putDepartment,
    deleteDepartment
   
}


