
const asyncHandeler = require('express-async-handler')
const Register = require('../models/RegisterModel')

const getRegister = asyncHandeler(async(req,res) =>{
    const register = await Register.find()
    res.status(200).json(register)
})
const postRegister = asyncHandeler(async(req,res) =>{
    if(!req.body){
        res.status(400)
        throw new Error ('pls add a file');
    }
    const register = await Register.create({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        // Picture:req.body.Picture

       
    

        // const newUser = req.body;
        // const result =  await usersCollection.insertOne(newUser)
        // console.log('got new user',req.body);
        // console.log('added new suer',result);
        // res.json(result);

        


       
    })
    register.save()
    res.status(200).json(register)
})
const putTestomonial = asyncHandeler(async(req,res) =>{
    const testomonial = await Testimonial.findById(req.params.id)
    if(!testomonial){
        res.status(400)
        throw new Error('Project not found')

    }
    const updateTestomonial= await Testimonial.findById(req.params.id,req.body,{
        new:true
    })
    
    res.status(200).json(updateTestomonial)
})
const deleteTestomonial= asyncHandeler(async(req,res) =>{
    const testomonial = await Testimonial.findById(req.params.id)
    if(!testomonial){
        res.status(400)
        throw new Error('Project not found')

    }
    await testomonial.remove()
    res.status(200).json({ id: req.params.id })
})
 
module.exports ={

    getRegister,
    postRegister,
    putTestomonial,
   deleteTestomonial
}