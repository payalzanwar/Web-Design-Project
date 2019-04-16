module.exports = (app) => {
    const user = require('../controller/userController');
    const package = require('../controller/packageController');
    

    app.post('/user',user.create);
    app.get('/user/:userName/:password',user.getUser);
    app.delete('/user/:userName',user.delete);
    app.get('/packagelist',package.getPackage);
    app.post('/package',package.create);
    
}