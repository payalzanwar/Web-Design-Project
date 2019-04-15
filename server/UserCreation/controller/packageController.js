const Package = require('../Schema/PackageSchema');

exports.getPackage = (req,res) => {
   
    Package.find({},function (err,package){
        if(err)
        res.status(400).send({message : 'Bad Request (Package not found)'});
    
        if(package){
            console.log(package);
           res.contentType('image/jpeg');
            res.send({package:package});
        
        }
       
    }); 
};

