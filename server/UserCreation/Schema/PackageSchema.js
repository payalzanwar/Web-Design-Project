const mongoose = require('mongoose');


const Package = mongoose.Schema({
    idProduct: {
        type: mongoose.Schema.Types.ObjectId,
        index: true
    },
    title: String,
     price: String,
     desc: String,
     cities: String,
     departureCity: String,
     departuteTime: String,
     returnTime: String,
     dressCode: String,
     included: String,
     notIncluded: String,
     img: { data: Buffer, contentType: String, name:String },
     days: String
});
module.exports = mongoose.model('Package', Package);