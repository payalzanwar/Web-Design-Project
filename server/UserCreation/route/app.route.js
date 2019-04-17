module.exports = (app) => {
    const user = require('../controller/userController');
    const package = require('../controller/packageController');
    const transportSiteController = require('../controller/transportSitesController');
    const accomodationSitesCtrl = require('../controller/accomodationSitesController');    

    app.post('/user',user.create);
    app.get('/user/:userName/:password',user.getUser);
    app.delete('/user/:userName',user.delete);
    
    app.get('/packagelist',package.getPackage);
    app.post('/package',package.create);

    app.get('/transportSites/:transportType', transportSiteController.getSites);
    app.post('/transportSite/create', transportSiteController.addSites);

    app.get('/accomodationSites', accomodationSitesCtrl.getSites);
    app.post('/accomodationSite/create', accomodationSitesCtrl.addSites);
}