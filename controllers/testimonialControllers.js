const asyncHandeler = require('express-async-handler')
const Testimonial = require('../models/testimonialModel')

const getTestimonial = asyncHandeler(async(req,res) =>{
    const testomonial = await Testimonial.find()
    res.status(200).json(testomonial)
})
const postTestimonial = asyncHandeler(async(req,res) =>{
    if(!req.body){
        res.status(400)
        throw new Error ('pls add a file');
    }
    const testomonial = await Testimonial.create({
        name: req.body.name,
        comments:req.body.comments
       
    

        // const newUser = req.body;
        // const result =  await usersCollection.insertOne(newUser)
        // console.log('got new user',req.body);
        // console.log('added new suer',result);
        // res.json(result);

        


       
    })
    testomonial.save()
    res.status(200).json(testomonial)
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

    getTestimonial,
    postTestimonial,
    putTestomonial,
   deleteTestomonial
}