const moment = require('moment');

//Every time we make a request this middleware is going to run
const logger = (req, res, next) => { //logger has these three. Always end with next to call the next logger
    console.log(`${req.protocol}://${req.get('host')}
    ${req.originalUrl}:${moment().format()}`);//should give http://localhost:8000/api/members. 
    next();
};

module.exports = logger;