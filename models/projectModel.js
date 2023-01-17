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
    class:{
        type:String,
        required:[true,'Pls type a  Category Class ']
    },
    client:{
        type:String,
        required:[true,'Pls type a Client Name']
    },
    Location:{
        type:String,
        required:[true,'Pls type a Location Name']
    },
    Consultant :{
        type:String,
        required:[true,'Pls type a Consultant']
    },
    architect :{
        type:String,
        required:[true,'Pls type a Consultant']
    },
    img :{
        data:Buffer,
        contentType:String
    },

})

module.exports = mongoose.model('project',projectSchema)