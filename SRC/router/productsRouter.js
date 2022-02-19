const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require("multer");
const path = require("path");

const storage=multer.diskStorage({
    destination:function(req, file, cb) {
        cb(null, path.resolve("public/img/products"))
    },
    filename: function (req, file, cb) {
        cb(null, file.filename + '_' + Date.now() + path.extname(file.originalname))},   
});

const upload=multer({storage:storage});

router.get("/", productsController.index);

router.get("/cart", productsController.productCart);

router.get("/create", productsController.create);
router.post('/',upload.single('imagen'),productsController.store);

router.get("/:id/edit", productsController.edit);
router.put("/:id", upload.single('imagen'),productsController.update);

router.get("/:id", productsController.detail);  

module.exports = router;