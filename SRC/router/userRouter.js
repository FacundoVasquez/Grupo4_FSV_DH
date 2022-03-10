const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
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

router.get("/register", userController.register);

router.post("/register", upload.single("avatar"), userController.processRegister);

module.exports= router;