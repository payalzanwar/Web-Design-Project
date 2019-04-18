const Book = require('../model/booking');
var fs = require('fs');
exports.create = (req,res) => {
    const Booking = new Book({
        Date : req.body.Date,
        Time : req.body.Time,
        price: req.body.price,
        Available: req.body.Available,
        
    });
    if(Booking){

        
        Booking.save().
        then(() => {
            res.sendStatus(200);
        }).catch(()=>{
            res.status(400).send({message : 'Bad Request'});
        });
    }
};

exports.getBooking = (req,res) => {
   const date = req.params.date.split("=")[1];
   console.log("print"+date);
    Book.find({Date:date},function (err,booksnow){
        if(err)
        res.status(400).send({message : 'Bad Request (Bookings not found)'});
    
        if(booksnow){
        
            res.send(booksnow);
        
        }
       
    }); 
};

