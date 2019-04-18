const mongoose = require('mongoose');


const Bookings = mongoose.Schema({
   
    Date: String,
     Time: String,
     Available: String,
     price: String,
     
});
module.exports = mongoose.model('Bookings', Bookings);