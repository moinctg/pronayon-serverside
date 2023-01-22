const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    name: {
        data:Buffer,
        contentType:String,
        required:[true,'pls type a name']
        
  
    },
})

module.exports= mongoose.model('Image',imageSchema)