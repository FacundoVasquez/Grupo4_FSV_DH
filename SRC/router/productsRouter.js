const express = require("express");

const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage=multer.diskStorage({
    destination:function(req, file, cb) {
        cb(null, path.resolve("public/img/products"))
    },
    filename: function (req, res, cb) {
        cb (null, file.filename + '_' + Date.now () + patch.extname (file.originalname))},   
});

const upload=multer({storage:storage})
const productsController = require("../controllers/productsController");

router.get("/", productsController.detail);
/*falta router.get productIndex*/
router.post('/',upload.single('imagen'),productsController.store )



module.exports = router;

