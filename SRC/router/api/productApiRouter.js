const express = require('express');
const router = express.Router();
const path = require("path");
const productApiController = require("../../controllers/api/productApiController")

/* GET users listing. */
router.get('/', productApiController.list);
router.post('/', productApiController.store);
router.get('/search', productApiController.search)
router.get('/:id',productApiController.show);
router.delete('/:id',productApiController.delete);
router.put('/:id',productApiController.edit);



module.exports = router;