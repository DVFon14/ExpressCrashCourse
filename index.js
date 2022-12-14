const express = require('express');
const path = require('path');
//const members = require('./Members'); //we moved this to our Routes -> api -> members file
//const moment = require('moment'); //we moved this to the logger.js because moment is no longer being used in this index.js
const logger = require('./middleware/logger')

const app = express();

//init middleware
//app.use(logger); //this initializes the logger.js file.

//BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

//MEMBERS API ROUTES
app.use('/api/members', require('./routes/api/members'));


const PORT =  process.env.PORT || 8000;


app.listen(PORT, ()=> console.log(`Server Started on port ${PORT}`));













