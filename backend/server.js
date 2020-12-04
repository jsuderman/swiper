const express = require("express");
const mongoose = require("mongoose");


//app config
const app = express();
const port = process.env.PORT || 8001

//middleware

//DB config

//API endpoints
app.get("/", (req, res) => res.status(200).send("hello world"));

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));