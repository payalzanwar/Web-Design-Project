const User = require('../model/user');

exports.create = (req,res) => {
    console.log(req.body.userName);
    const data = {
        userName: req.body.userName
    };
    User.findOne(data, (error, user) => {
        console.log("USer"+user);
        if(user){
            // res.status(401).send({'message':'User exists already with this UserName / Email'});
          // res.status(401).send({'message':user.userName}); 
        }else{
            const user = new User({
                userName : req.body.userName,
                password : req.body.password,
                firstName : req.body.firstName,
                lastName : req.body.lastName
            });
        
            user.save().then(() => {
                res.status(200).send({'message':'Payal'});
            });
        }
    })
    
};

exports.getUser = (req,res) => {
    const data = {
        userName: req.params.userName.split("=")[1],
        password: req.params.password.split("=")[1]
    };
    User.findOne(data,(error,user) => {
        if(!user || error){
            res.status(401).send({'message':'Invalid Username/Password'});
        }else{
            res.send({'user':user});
        }
    })
};

exports.delete = (req,res) => {
    User.findOneAndRemove(req.params.userName).
    then(user => {
        res.send({'message':'user deleted successfully'});
    }); 
};