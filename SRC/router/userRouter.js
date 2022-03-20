const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const validation = require('../middleware/validation')
const path = require("path");
const multer = require("multer");

//Multer foto registro
const storage=multer.diskStorage({
    destination:function(req, file, cb) {
        cb(null, path.join(__dirname, "../../public/img/users"))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))},   
});

const upload=multer({storage:storage});

//Rutas de Usuarios

router.get("/login", userController.login);
router.post('/login', [
    check('email').isEmail().withMessage('Email inválido'),
    check('password').isLength({min:6}).withMessage('La contraseña debe tener al menos 6 caracteres')],
    userController.processLogin);


router.get("/register", userController.register);

router.post("/register", upload.single("avatar"), validation, userController.processRegister);

module.exports= router;