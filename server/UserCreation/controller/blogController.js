const Post = require('../model/post');

exports.upload = (req, res) => {
    
    var encode_image = req.body.file.toString('base64');
    var image = new Buffer(encode_image, 'base64')

    const ts = new Post({
        postDesc: req.body.postDesc,
        email: req.body.email,
        likes: req.body.likes | 0,
        liked_by: [],
        img: { 
            data: image, 
            contentType: req.body.fileType
        }
    });

    ts.save().then(() => {
        console.log('Thanks for sharing your experience!!');
        res.send({'message':'Thanks for sharing your experience!!'});
    }, (err) => {
        console.log('Error while inserting Post');
        return res.send(err);
    });
}

exports.getPosts = (req, res) => {
    Post.find({}, (error, list) => {
        if(list){
            res.send(list);
        }else{
            res.send('Error Retreiving Posts');
        }
    })
}
exports.updateLikes = (req, res) => {
    console.log(req.body.liked_by);

    const likes = req.body.likes;
    const objectId = req.body.objectId;
    const likedBy = req.body.liked_by;

    Post.findOne({_id: objectId}, (error, post) => {
        if(post){
            Post.updateOne( {_id: objectId} , 
                    { "$set": 
                        {  
                            "likes": likes
                        }
                    },
                    { "$push": 
                        {  
                            "liked_by": 2
                        }
                    })
                    .then((result) => {
                        if(result){
                            return res.send({'message': 'Updated likes'});
                        }else{
                            return res.status(401).send("Invalid Id");
                        }
                    }).catch((err) => {
                        return res.status(401).send(err.message);
                    });

            
        }else{
            res.send('Error Retreiving Post');
        }
    })
}

// exports.addPost = (req, res) => {
//     const ts = new Post({
//         postDesc: 'hh',
//         email: 'hh@hh.com',
//         img: { 
//             data: fs.readFileSync('./images/bricktownwatertaxi.png'), 
//             contentType: 'image/png'
//         }
//     });

//     console.log(ts.img.data);
    

//     ts.save().then(() => {
//         console.log({'message':'Inserted Post successfully'});
//         return res.status(204).send('Inserted Post successfully');
//     }, (err) => {
//         console.log('Error while inserting Post');
//         return res.send(err);
//     });
// }