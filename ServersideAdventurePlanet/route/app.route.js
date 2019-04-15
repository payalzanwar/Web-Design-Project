module.exports = (app) => {
    const user = require('../controller/userController');

    app.post('/user',user.create);
    app.get('/user/:email/:password',user.getUser);
    app.delete('/user/:email',user.delete);
}