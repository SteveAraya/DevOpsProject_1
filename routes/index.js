// ===================== IMPORTS =====================
const express           = require('express');

const app_route         = require('../controllers/app');
const user_route        = require('../controllers/usersController');


// =================== END IMPORTS ===================


// ===================== VARIABLES =====================
const routes = express();
// =================== END VARIABLES ===================

// ===================== MIDDLEWARE =====================
routes.use('/', app_route);
routes.use('/user', user_route);


// =================== END MIDDLEWARE ===================

//Exports module
module.exports = routes;