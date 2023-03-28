const mongoose = require('mongoose')

const registerSchema = mongoose.Schema ({
   fullName : {
        type: String,
        required:true,
        
    },
    address : {
        type: String,
        required:true,

    },
     phone: {
        type: String,
        required:true,

    },
    email : {
        type: String,
        required:true,

    },
    password : {
        type: String,
        required:true,

    }
    ,
    
    // Picture : {
    //     type: String,
    //     required:true,

    // } 

    


})
module.exports = mongoose.model("Register",registerSchema)
