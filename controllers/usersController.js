// ===================== IMPORTS =====================
const express       = require('express');

// =================== END IMPORTS ===================


// ===================== VARIABLES =====================
const user = express();
// =================== END VARIABLES ===================


// ===================== GET USERS BY PLANT MANAGER =====================
user.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        message: 'Get de usuario éxitoso.',
        user: {'user': 'saraya', 'name': 'Steve Araya Solórzano'}
    });

});
// =================== GET USERS BY PLANT MANAGER ===================


//Export module
module.exports = user;