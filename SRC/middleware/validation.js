const { check } = require('express-validator');

const validation = [

check("email").notEmpty().withMessage("El campo E-mail: no puede estar vacío").bail().isEmail().withMessage("E-mail: debe ser un e-mail"),
check("password").notEmpty().withMessage("El campo Contraseña: no puede estar vacío").bail().isLength({min:6}),
check("password1").notEmpty().withMessage("El campo Confirmación: de contraseña no puede estar vacío").bail().isLength({min:6})

]

module.exports = validation;