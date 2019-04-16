const mongoose = require('mongoose');


const Package = mongoose.Schema({
   
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
     imgPath :String,
     days: String
});
module.exports = mongoose.model('Package', Package);