const  mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true,'pls type a name']
    },
    designation:{
        type:String,
        required:[true,'Pls type a  department ']
    },
    department:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Department'
    },
    facebook:{
        type:String,
        required:[true,'Pls type a  Facebook Account  ']
    },
    linkdin:{
        type:String,
        required:[true,'Pls type a linkdin Account ']
    },
    img:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Image'
    }
    // img :{
    //     data:Buffer,
    //     contentType:String
    // },
    
})
module.exports = mongoose.model("team",teamSchema)