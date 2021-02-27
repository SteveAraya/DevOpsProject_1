// ===================== IMPORTS =====================
const express       = require('express');

// =================== END IMPORTS ===================


// ===================== VARIABLES =====================
const user = express();
// =================== END VARIABLES ===================


// ===================== GET USERS BY PLANT MANAGER =====================
user.get('/', (req, res, next) => {

    const user = {
        'user': 'saraya', 
        'name': 'Steve Araya Solórzano',
        'cellphone': '85254117',
        'email': 'stevenaraya.24@gmail.com',
        'address': 'Alajuela/San Carlos/La Tigra'
    }

    res.status(200).json({
        ok: true,
        message: 'Get de usuario éxitoso.',
        user: user
    });

});
// =================== GET USERS BY PLANT MANAGER ===================


//Export module
module.exports = user;