const { check } = require('express-validator');

const validation = [
check("user_name").notEmpty().withMessage("El campo nombre y apellido no puede estar vacío").isLength({min:2}).withMessage("El User Name debe tener mínimo 2 caracteres"), 
check("email").notEmpty().withMessage("El campo E-mail no puede estar vacío").bail().isEmail().withMessage("E-mail: debe ser un e-mail"),
check("password").notEmpty().withMessage("El campo contraseña no puede estar vacío").bail().isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1
}).withMessage("La contraseña debe tener al menos 8 caracteres, con al menos una mayúscula, una minúscula, un número y un caracter especial").bail(),

check("password1").notEmpty().withMessage("El campo confirmación de contraseña no puede estar vacío").bail().isStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1
}).bail(),

// check("password").equals("password1").withMessage("Las contraseñas no coinciden"),

];

//check("avatar").allowedExts["JPG", "PNG", "JPEG", "GIF"],

module.exports = validation;