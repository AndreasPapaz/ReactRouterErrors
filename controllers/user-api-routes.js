const User = require("../model/User");
const isAuthenticated = require('../passport/middleware/isAuthenticated');
const passport = require('passport');

module.exports = function(app, passport) {

    app.post("/login", passport.authenticate("local"), function(req, res){
        // console.log("you have hit the login route" + req.user);
        console.log(req.isAuthenticated === true);
        if (req.user) {
            res.json(req.user);
        }
    });

    // app.post('/login', function(req, res, next) {
    //   passport.authenticate('local', function(err, user) {
    //     if(err) {
    //       console.log(err);
    //     }
    //     console.log(user);
    //   })(req, res, next);
    // });

    // app.get('/dashboard', function(req, res) {
    //     console.log('the url rt for dash');
    //     console.log(req.body);
    // });


   app.post('/getUser', function(req, res) {
    // console.log(req.body);
        User.findOne({
            _id: req.body.userId
        }, function(err, User) {
            // console.log("this is the user");
            // console.log(User);
            if (err) {
                console.log(err);
            }
            if (!User) {
                res.json(false);
            } else {
                res.json(User);
            }
        });
   });

    // app.use('*', function(req, res) {
    //     var dir = __dirname;
    //     var dirSplit = dir.split("controllers");
    //     dir = dirSplit[0];

    //     res.sendFile(dir + '/public/index.html');
    // });


    app.post('/signup', function(req, res) {
        console.log("new signup rt");
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