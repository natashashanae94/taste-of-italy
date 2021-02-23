const express = require("express");
const router = express.Router();


//Load User model
const User = require("../../models/User");

// @route POST api/users/reservation
// @desc Register user
// @access Public
router.post("/reservation", (req, res) => {
    const newUser = new User ({
        name: req.body.name,
        numberOfGuests: req.body.numberOfGuests,
        date: req.body.date,
        time: req.body.time
    });


    newUser.save();

    res.send('Reservation added successfully..');
});


module.exports = router;