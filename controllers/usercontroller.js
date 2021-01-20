const router = require("express").Router(); 
const User=require("../db").import("../models/user");
const bcrypt=require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/create", function(req, res){
 User.create({ 
        email: req.body.user.email,
        password: bcrypt.hashSync(req.body.user.password, 13),
    })
    .then(function createSuccess(user) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })
    res.json({
    user: user,
    message: "User successfully created!",   
    sessionToken: token,
})
})

.catch( function createFail(err) {
    res.status(500).json({ error: err});
    });
});

// Create a new endpoint: /login
//The endpoint is going to be a post request
//Build a query statement (hard code in a user's email that exists in your databse)
//use findone
//Let sequelize return a success
//if we find one return user info and if a user doesnt exisit return "user does not exist"

router.post("/login", function (req, res) {
    User.findOne({where: { email: "test4@test.com" } })
    .then(function loginSuccess(user){
        if(user){
            res.send(200).json({ user: user});
        } else {
        res.send('User not found')
    }
});
    

router.post({where: {
            email: req.body.user.email,
        },
    })
    .then(function loginsuccess(user) {
        if (user) {
            res.status(200).json({
                user: user,
                message: "user successfully logged in"
            });
        }else {
    res.status(500).json({error:"User does not exist" });

        }});
    })

module.exports= router