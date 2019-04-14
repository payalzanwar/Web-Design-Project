const mongoose = require('mongoose');
const Image =  mongoose.Schema({
    img: { data: Buffer, contentType: String, name:String }
});

module.exports = mongoose.model('Image',Image);