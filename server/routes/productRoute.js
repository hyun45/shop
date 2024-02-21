const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const productController = require("../controller/productController");
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");
const path = require("path");

router.use(bodyParser.json());

router.get('/', productController.allProduct);
router.get('/:productId', productController.findProduct);


router.get('/mainCategory/:mainCategoryId', productController.findProductsMainCategory);
router.get('/subCategory/:subCategoryId', productController.findProductsSubCategory);

router.use((req, res, next) => {
    next('Not found error!');
});

router.use((err, req, res, next) => {
    res.status(500).json(response.responseFromData(resTEXT.RESPONSE_TEXT.FAIL, resTEXT.PRODUCT_MESSAGE.ERROR, err));
});


module.exports = router;
