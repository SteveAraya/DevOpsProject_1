// ===================== IMPORTS =====================
const express = require('express');
// =================== END IMPORTS ===================


// ===================== VARIABLES =====================
const app = express();
// =================== END VARIABLES ===================


// ===================== VARIABLES =====================
app.get('/', (req, res, next) => {
    res.status(200).json({
        connect: true,
        mensaje: 'El servicio es estable.'
    })
});
// =================== END VARIABLES ===================


//Export module
module.exports = app;