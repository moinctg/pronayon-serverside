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
        type:String,
        required:[true,'Pls type a  Category Class ']
    },
    img :{
        data:Buffer,
        contentType:String
    },
})
module.exports = mongoose.model("team",teamSchema)