const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require("multer");
const path = require("path");

const storage=multer.diskStorage({
    destination:function(req, file, cb) {
        cb(null, path.join(__dirname, "../../public/img/products"))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))},   
});

const upload=multer({storage:storage});

router.get("/", productsController.index);
router.get("/search", productsController.search);

router.get("/cart", productsController.productCart);

router.get("/create", productsController.create);
router.post('/create',productsController.store);

router.get("/:id", productsController.detail);  

router.get("/:id/edit", productsController.edit);
router.post("/:id/edit", productsController.update);
router.post('/:id/delete', productsController.delete);



module.exports = router;