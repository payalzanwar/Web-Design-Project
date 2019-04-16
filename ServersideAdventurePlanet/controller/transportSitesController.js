const TransportSite = require('../model/transportSite');
const fs = require('fs');

exports.getSites = (req, res) => {
    const transportType = req.params.transportType.split("=")[1];
    TransportSite.find({transportType: transportType}, (error, list) => {
        if(list){
            res.send(list);
        } else{
            res.send('Error Retreiving Transport Sites list');
        }
    })
}

exports.addSites = (req, res) => {
    const ts = new TransportSite({
        transportType: 'waterTaxies',
        siteName: 'Bricktown Water Taxi',
        siteDesc: 'Bricktown Water Taxi',
        siteLink: 'https://bricktownwatertaxi.com/',
        siteRating: 4,
        rangeFrom: 0,
        email: 'bricktownwatertaxi@gmail.com',
        phone: '1-800-872-7245',
        img: { data: fs.readFileSync('./images/bricktownwatertaxi.png'), contentType: 'image/png' }
    });

    ts.save().then(() => {
        console.log({'message':'Inserted Tranport Site successfully'});
        return res.status(204).send('Inserted Tranport Site successfully');
    }, (err) => {
        console.log('Error while inserting Tranport Site');
        return res.send(err);
    });
}