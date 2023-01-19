const asyncHandeler = require('express-async-handler')
const Team = require('../models/teamModel')

const getTeam = asyncHandeler(async(req,res) =>{
    const teams = await Team.find()
    res.status(200).json(teams)
})
const postTeam = asyncHandeler(async(req,res) =>{
    if(!req.body){
        res.status(400)
        throw new Error ('pls add a file');
    }
    const teams = await Team.create({
        name: req.body.name,
        designation: req.body.designation,
        department: req.body.department,
        
        img: req.body.img

        // const newUser = req.body;
        // const result =  await usersCollection.insertOne(newUser)
        // console.log('got new user',req.body);
        // console.log('added new suer',result);
        // res.json(result);

        


       
    })
    teams.save()
    res.status(200).json(teams)
})
const putTeam = asyncHandeler(async(req,res) =>{
    const teams = await Team.findById(req.params.id)
    if(!teams){
        res.status(400)
        throw new Error('Project not found')

    }
    const updateTeam= await Team.findById(req.params.id,req.body,{
        new:true
    })
    
    res.status(200).json(updateTeam)
})
const deleteTeam= asyncHandeler(async(req,res) =>{
    const teams = await Team.findById(req.params.id)
    if(!teams){
        res.status(400)
        throw new Error('Project not found')

    }
    await teams.remove()
    res.status(200).json({ id: req.params.id })
})
 
module.exports ={

    getTeam,
    postTeam,
    putTeam,
   deleteTeam
}