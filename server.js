const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());

// BodyParser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

//Routes
const users = require("./routes/api/users");
app.use("/api/users", users);

const signup = require("./routes/api/signup");
app.use("/api/signup", signup);

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
.connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: false }
)
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));


//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {

    
    //Set static folder
    //All the JavaScript and CSS files will be read and served from this folder
    app.use(express.static('client/build'));

    // index.html for all page routes
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });

}


const PORT = process.env.PORT || 5000; //process.env.port is Heroku's port if you choose to deploy the app there.

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

