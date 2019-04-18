const AccomodationSite = require('../model/accomodationSite');
const fs = require('fs');

exports.getSites = (req, res) => {
    AccomodationSite.find( {} , (error, list) => {
        if(list){
            res.send(list);
        } else{
            res.send('Error Retreiving Accomodation Sites list');
        }
    })
}

exports.addSites = (req, res) => {
    const ts = new AccomodationSite({
        siteName: 'Hotels',
        siteDesc: 'Hotels.com - Deals & Discounts for Hotel Reservations',
        siteLink: 'https://www.hotels.com/',
        siteRating: 4,
        rangeFrom: 0,
        email: 'Hotels@gmail.com',
        phone: '1-800-872-7245',
        img: { data: fs.readFileSync('./images/hotels.png'), contentType: 'image/png' }
    });

    ts.save().then(() => {
        console.log({'message':'Inserted Accomodation Site successfully'});
        return res.status(204).send('Inserted Accomodation Site successfully');
    }, (err) => {
        console.log('Error while inserting Accomodation Site');
        return res.send(err);
    });
}