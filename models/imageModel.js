

// - this is the code for ./models.js
 
var mongoose = require('mongoose');
 
var imageSchema = new mongoose.Schema({
    name: {type : String},
    desc: {type : String},
    img: {type : String}
});
 

//Image is a model which has a schema imageSchema
 
module.exports = new mongoose.model('Image', imageSchema);