const express = require("express");
const router = express.Router();

//Load User model
const SignUp = require("./models/SignUp");

// @route POST api/signup/signupform
// @desc Register signupuser
// @access Public

router.post("/signupform", (req, res) => {
    const newSignUpUser = new SignUp ({
        name: req.body.name,
        email: req.body.email
    });


    newSignUpUser.save();

    console.log(req.body);

    res.send('Sign up added successfully..');
});


module.exports = router;