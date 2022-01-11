const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())
//import Routes
const postsRoute = require('./routes/posts');

app.use('/posts',postsRoute);

//ROUTES
//get shoots back us a message

app.get('/',(req,res) => {
    res.send('We are on home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true},() => console.log("Connected to DB!"));

//listen to the port
app.listen(5000);