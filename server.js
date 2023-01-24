const express = require("express");


// here we construct our Express App 

const app = express();


app.get('/'. (req, res) => {
    res.send("Testing...");
})

// before the server starts we connect to our database
