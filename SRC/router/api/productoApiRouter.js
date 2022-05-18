const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const path = require("path");

/* GET users listing. */
router.get('/', productController.list);
router.post('/', productController.store);
router.get('/search', productController.search)
router.get('/:id',productController.show);
router.delete('/:id',productController.delete);
router.put('/:id',productController.edit);



module.exports = router;