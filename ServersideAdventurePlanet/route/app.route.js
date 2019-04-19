module.exports = (app) => {
    const user = require('../controller/userController');
    const transportSiteController = require('../controller/transportSitesController');
    const accomodationSitesCtrl = require('../controller/accomodationSitesController');
    const blogCtrl = require('../controller/blogController');

    app.post('/user',user.create);
    app.get('/user/:email/:password',user.getUser);
    app.delete('/user/:email',user.delete);

    app.get('/transportSites/:transportType', transportSiteController.getSites);
    app.post('/transportSite/create', transportSiteController.addSites);

    app.get('/accomodationSites', accomodationSitesCtrl.getSites);
    app.post('/accomodationSite/create', accomodationSitesCtrl.addSites);

    app.post('/upload', blogCtrl.upload);
    app.get('/posts', blogCtrl.getPosts);
    app.put('/updateLikes', blogCtrl.updateLikes);
    // app.post('/addPost', blogCtrl.addPost);

}