
const mongoose = require('mongoose')

const departmentSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true,'pls type a name']
    },
})

module.exports = mongoose.model('Department',departmentSchema)