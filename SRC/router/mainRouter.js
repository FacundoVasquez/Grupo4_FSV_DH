const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const path = require("path");


//Direcciones de controladores
router.get("/", mainController.index);

router.get("/register", mainController.register);

router.get("/login", mainController.login);

router.get("/userCreate", mainController.userCreate);

module.exports = router;
