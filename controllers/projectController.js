
const asyncHandeler = require('express-async-handler')
const Project = require('../models/projectModel')

const getProject = asyncHandeler(async(req,res) =>{
    const projects = await Project.find()
    res.status(200).json(projects)
})
const postProject = asyncHandeler(async(req,res) =>{
    if(!req.body){
        res.status(400)
        throw new Error ('pls add a file');
    }
    const projects = await Project.create({
        title: req.body.title,
        description: req.body.description,
        // class: req.body.class,
        // client: req.body.client,
        // Location: req.body.Location,
        // Consultant: req.body.Consultant,
        // architect: req.body.architect,
        // img: req.body.img

        // const newUser = req.body;
        // const result =  await usersCollection.insertOne(newUser)
        // console.log('got new user',req.body);
        // console.log('added new suer',result);
        // res.json(result);

        


      
    })
    res.status(200).json(projects)
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