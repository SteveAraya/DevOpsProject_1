// ===================== IMPORTS =====================
require('dotenv').config()

const express     = require('express');
const body_parser = require('body-parser');

const port      = process.env.API_PORT || 3000;
// =================== END IMPORTS ===================


// ===================== VARIABLES =====================
const app = express();
// =================== END VARIABLES ===================

// ===================== CORS =====================
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, body");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});
// =================== END CORS ===================

// ===================== BODY PARSER =====================
app.use(body_parser.json({limit: '10mb', extended: true}));
app.use(body_parser.urlencoded({limit: '10mb', extended: true}));
// =================== END  BODY PARSER ===================

// ===================== ROUTE =====================
const routes = require('./routes');
// =================== END ROUTE ===================

// ===================== MIDDLEWARE =====================
app.use('/', routes);
// =================== END MIDDLEWARE ===================

// Port listen.
app.listen(port, () => { console.log('Application is Up in port \x1b[32m%s\x1b[0m', process.env.API_PORT) });

module.exports = app;
