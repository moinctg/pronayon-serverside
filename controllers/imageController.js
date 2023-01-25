const asyncHandeler = require('express-async-handler')
const Image = require('../models/imageModel')

const getImage = asyncHandeler(async(req,res) =>{
    const image = await Image.find()
    res.status(200).json(image)
})
const postImage = asyncHandeler(async(req,res) =>{
    if(!req.body){
        res.status(400)
        throw new Error ('pls add a file');
    }
    const image = await Image.create({
        name: req.body.name,
        desc: req.body.desc,
        // department: req.body.department,
        
        img: req.file.path

        // const newUser = req.body;
        // const result =  await usersCollection.insertOne(newUser)
        // console.log('got new user',req.body);
        // console.log('added new suer',result);
        // res.json(result);

        


       
    })
    image.save()
    res.status(200).json(image)
})
const putImage = asyncHandeler(async(req,res) =>{
    const img = await Image.findById(req.params.id)
    if(!img){
        res.status(400)
        throw new Error('Project not found')

    }
    const updateImage= await Image.findById(req.params.id,req.body,{
        new:true
    })
    
    res.status(200).json(updateImage)
})
const deleteImage= asyncHandeler(async(req,res) =>{
    const image = await Image.findById(req.params.id)
    if(!image){
        res.status(400)
        throw new Error('Project not found')

    }
    await image.remove()
    res.status(200).json({ id: req.params.id })
})
 
module.exports ={

    getImage,
    postImage,
    putImage,
   deleteImage
}