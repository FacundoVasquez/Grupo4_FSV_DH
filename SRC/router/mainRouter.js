const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const path = require("path");


//Direcciones de controladores
router.get("/", mainController.index);


router.get("/productDetail", mainController.productDetail);//Chequear luego para asociar a productos

router.get("/contacto", mainController.contacto);

router.get("/quienesSomos", mainController.quienesSomos)

module.exports = router;
