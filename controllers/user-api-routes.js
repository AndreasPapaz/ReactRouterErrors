const User = require("../model/User");
const isAuthenticated = require('../passport/middleware/isAuthenticated');

module.exports = function(app, passport) {

    app.post("/login", passport.authenticate("local"), function(req, res){
        console.log("you have hit the login route" + req.user);
        console.log(req.isAuthenticated === true);
        if (req.user) {
            res.json(req.user);
        }
    });

    // app.get('/dashboard', function(req, res) {
    //     console.log('the url rt for dash');
    //     console.log(req.body);
    // });


   app.post('/getUser', function(req, res) {
    // console.log(req.body);
        User.findOne({
            _id: req.body.userId
        }, function(err, Ures) {
            if (err) {
                console.log(err);
            }
            if (!Ures) {
                res.json(false);
            } else {
                res.json(Ures);
            }
        });
   });

    app.use('*', function(req, res) {
        var dir = __dirname;
        var dirSplit = dir.split("controllers");
        dir = dirSplit[0];

        res.sendFile(dir + '/public/index.html');
    });


    app.post('/signup', function(req, res) {
        console.log("new signup rt : " + req.body);
        console.log(req.body);

        var user = new User(req.body);

        user.save(function(err, doc) {
            if (err) {
                res.send(err);
            } else {
                res.send(doc);
            }
        });
    });
};