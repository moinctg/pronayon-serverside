const mongoose = require('mongoose')

const testimonialSchema =  mongoose.Schema({

    name: {
        type:String,
         required:[true,  'pls type your name']
    },
    comments:{
        type:String,
        required:[true,'pls type somthing ']
    },

}, 
{
     timestamps: true,
    
}
 
);
module.exports = mongoose.model('testimonial',testimonialSchema);
