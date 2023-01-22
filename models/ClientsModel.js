const mongoose = require('mongoose')

const clientsSchema = mongoose.Schema({

    name: {
        type:String,
        required:[true,'pls type a name']
    },
    address:{
        type:String,
        required:[true,'pls typa client address']
    },
    contact:{
        type:String,
        required:[true,'pls typa client contact number']
    },

   
    img:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Image'
    }
})

module.exports = mongoose.model("Client",clientsSchema )