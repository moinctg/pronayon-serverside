
const asyncHandeler = require('express-async-handler')
const Project = require('../models/projectModel')
const getProject = asyncHandeler(async(req,res) =>{
    const projects = await Project.find()
    res.status(200).json(projects)
})
const postProject = asyncHandeler(async(req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error ('pls add a file');
    }
    res.status(200).json({
        message:"Post new  Project "
    })
})
const putProject = asyncHandeler(async(req,res) =>{
    res.status(200).json({
        message:"updated Project info"
    })
})
const deleteProject = asyncHandeler(async(req,res) =>{
    res.status(200).json({
        message:"delete  Project "
    })
})

module.exports ={

    getProject,
    postProject,
    putProject,
    deleteProject
}