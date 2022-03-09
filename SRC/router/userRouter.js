const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const path = require("path");

router.get("/login", userController.login);

router.get("/register", userController.register);

router.post("/", userController.store);

module.exports= router;