const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const SignUpSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    }
});

const SignUp = mongoose.model("signup", SignUpSchema);
module.exports = SignUp;