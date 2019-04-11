const Package = require('../model/package');

// exports.create = (req,res) => {
//     console.log(req.body.userName);
//     const data = {
//         userName: req.body.userName
//     };
//     User.findOne(data, (error, user) => {
//         console.log("USer"+user);
//         if(user){
//             // res.status(401).send({'message':'User exists already with this UserName / Email'});
//           // res.status(401).send({'message':user.userName}); 
//         }else{
//             const user = new User({
//                 userName : req.body.userName,
//                 password : req.body.password,
//                 firstName : req.body.firstName,
//                 lastName : req.body.lastName
//             });
        
//             user.save().then(() => {
//                 res.status(200).send({'message':'Payal'});
//             });
//         }
//     })
    
// };

exports.getPackage = (req,res) => {
    Package.find({},function (err,package){
        if(err)
        res.status(400).send({message : 'Bad Request (Package not found)'});
    
        if(package){
            console.log(package);
            res.send({package:package});
         
               
           
        }
       
    }); 
};

