module.exports = (app) => {
    const user = require('../controller/userController');
    const package = require('../controller/packageController');
    const transportSiteController = require('../controller/transportSitesController');
    const accomodationSitesCtrl = require('../controller/accomodationSitesController');    
    const adventures = require('../controller/adventureController');
    const booking = require('../controller/BookController');
    app.post('/user',user.create);
    app.get('/user/:email/:password',user.getUser);
    app.delete('/user/:email',user.delete);
    
    app.get('/packagelist',package.getPackage);
    app.post('/package',package.create);

    app.get('/transportSites/:transportType', transportSiteController.getSites);
    app.post('/transportSite/create', transportSiteController.addSites);

    app.get('/accomodationSites', accomodationSitesCtrl.getSites);
    app.post('/accomodationSite/create', accomodationSitesCtrl.addSites);

    app.get('/adventures/:adventureType', adventures.getAdvList);
    app.post('/adventure/create', adventures.createadv);

    app.get('/booking/:date', booking.getBooking);
    app.post('/booknow/create', booking.create);
}