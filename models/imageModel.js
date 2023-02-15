

// - this is the code for ./models.js
 
var mongoose = require('mongoose');
 
var imageSchema = new mongoose.Schema({
    name: {type : String,
        required:[true,'Pls type a Image Name ']
    },
    description: {type : String,
        required:[true,'Pls type a Image Description']
    },
    
    
    img: {type : String, required:[true,'Pls select image']}
});
 

//Image is a model which has a schema imageSchema
 
module.exports = new mongoose.model('Image', imageSchema);