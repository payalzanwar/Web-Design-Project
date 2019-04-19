const mongoose = require('mongoose');

const Post = mongoose.Schema({
    postDesc: String,
    email: String,
    likes: Number,
    liked_by: [],
    img: { 
        data: Buffer,
        contentType: String 
    }

});

module.exports = mongoose.model('Post', Post);