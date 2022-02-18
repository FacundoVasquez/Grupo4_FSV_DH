const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require("multer");
const path = require("path");

//MULTER
const storage = multer.diskStorage({
    destination:function(req, file, cb) {
        cb(null, path.resolve("public/img/products"))
    },
    filename: function (req, file, cb) {
        cb(null, file.filename + '_' + Date.now () + path.extname (file.originalname))},   
});
const upload = multer({storage:storage})

<<<<<<< HEAD
const productsController = require("../controllers/productsController");

router.get("/", productsController.detail);
/*falta router.get productIndex*/

router.get ("/productCreate", productsController.create)
router.post('/',upload.single('imagen'),productsController.store)
=======
const upload=multer({storage:storage});

router.get("/", productsController.index);

router.get("/cart", productsController.productCart);

router.get("/create", productsController.create);
router.post('/',upload.single('imagen'),productsController.store);

router.get("/:id/edit", productsController.edit);
router.put("/:id", upload.single('imagen'),productsController.update);

router.get("/:id", productsController.detail);  
>>>>>>> 88f6460e9eebafdf3074c688d8cb6917628c686b

module.exports = router;

