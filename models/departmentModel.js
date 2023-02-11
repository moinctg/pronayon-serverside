
const mongoose = require('mongoose')

const departmentSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true,'pls type a name']
    },
    description:{
        type:String,
        required:[true,'Pls type your description']
    }
})

module.exports = mongoose.model('Department',departmentSchema)