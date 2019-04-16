const Package = require('../model/package');
var fs = require('fs');
exports.create = (req,res) => {
    const Pkg = new Package({
        title : req.body.title,
        price : req.body.price,
        desc: req.body.desc,
        cities: req.body.cities,
        departureCity: req.body.departureCity,
        departuteTime: req.body.departuteTime,
        returnTime : req.body.returnTime,
        dressCode: req.body.dressCode,
        included : req.body.included,
        notIncluded: req.body.notIncluded,
        img: { data: fs.readFileSync(req.body.img.data), contentType: req.body.img.contentType},
        days: req.body.days
    });
    if(Pkg){

        
        Pkg.save().
        then(() => {
            res.sendStatus(200);
        }).catch(()=>{
            res.status(400).send({message : 'Bad Request'});
        });
    }
};

exports.getPackage = (req,res) => {
   
    Package.find({},function (err,package){
        if(err)
        res.status(400).send({message : 'Bad Request (Package not found)'});
    
        if(package){
            //console.log(package[0].imgPath);
            // package.forEach(function(pkg){
            //     var bitmap = fs.readFileSync(pkg.imgPath);
            //     var encode_image = bitmap.toString('base64');
            //     pkg.imgPath=new Buffer(encode_image).toString('base64');
         
            // });
         
        //  console.log(package);
            res.send({package:package});
        
        }
       
    }); 
};

