const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/database.config');
var cors = require('cors');

var Image = require('./route/Image');

const app = express();
app.use(bodyParser.json());


app.use(cors());

app.use('/image',Image);
app.get('/',(req,res) => {
   
    res.json({'message':'Welcome'}); 
    });





mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to database");
}).catch(() => {
    console.log("Error connecting to database");
});

require('./route/app.route')(app);

app.listen('3000',() => {
    console.log("Server Running");
});





