const router = require("express").Router(); 
const User=require("../db").import("../models/user");
const bcrypt=require("bcryptjs");

router.post("/create", function(req, res){
 User.create({ 
        email: req.body.user.email,
        password: bcrypt.hashSync(req.body.user.password, 10),
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
router.post("/login", function (req, res) {
    User.findOne({
        where: {
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

 // Next section

modules.exports= router