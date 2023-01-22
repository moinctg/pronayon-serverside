const asyncHandeler = require('express-async-handler')
const Client = require('../models/ClientsModel')

const getClients= asyncHandeler(async(req,res) =>{
    const clients = await Client.find()
    res.status(200).json(clients)
})
const postClients= asyncHandeler(async(req,res) =>{
    if(!req.body){
        res.status(400)
        throw new Error ('pls add a file');
    }
    const clients = await Client.create({
        name: req.body.name,
        address: req.body.address,
        contact: req.body.contact,
        
        img: req.body.img

        // const newUser = req.body;
        // const result =  await usersCollection.insertOne(newUser)
        // console.log('got new user',req.body);
        // console.log('added new suer',result);
        // res.json(result);

        


       
    })
    clients.save()
    res.status(200).json(clients)
})
const putClients = asyncHandeler(async(req,res) =>{
    const teams = await Client.findById(req.params.id)
    if(!teams){
        res.status(400)
        throw new Error('Project not found')

    }
    const updateclients= await Client.findById(req.params.id,req.body,{
        new:true
    })
    
    res.status(200).json(updateclients)
})
const deleteClients= asyncHandeler(async(req,res) =>{
    const clients = await Client.findById(req.params.id)
    if(!clients){
        res.status(400)
        throw new Error('Project not found')

    }
    await clients.remove()
    res.status(200).json({ id: req.params.id })
})
 
module.exports ={

    getClients,
    postClients,
    putClients,
   deleteClients
}