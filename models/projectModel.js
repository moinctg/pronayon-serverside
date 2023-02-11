const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    title: {
        type:String,
        required:[true,'pls type a project title']
    },
    description:{
        type:String,
        required:[true,'Pls type a project Description ']
    },
    // class:{
    //     type:String,
    //     required:[true,'Pls type a  Category Class ']
    // },
    client:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Client'
    },
    location:{
        type:String,
        required:[true,'Pls type a Location Name']
    },
    consultant :{
        type:String,
        required:[true,'Pls type a Consultant']
    },
    architect :{
        type:String,
        required:[true,'Pls type a Consultant']
    },
    

    department:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Department'
    },
    img:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Image'
    }

})

module.exports = mongoose.model('project',projectSchema)