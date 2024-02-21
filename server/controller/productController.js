const productService = require("../service/productService")
const response = require("../data/responseFrom")
const resTEXT = require("../data/responseString");

exports. createProduct = async (req, res, next) => {
    const {name, price, stock, description, mainCategoryId, subCategoryId, image1} = req.body;
    await productService.createProduct(name, price, stock, description, mainCategoryId, subCategoryId, image1, req.user.email)
        .then(() => res.status(200).json(response.responseFromMessage(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.PRODUCT_MESSAGE.CREATE)))
        .catch(err => next(err));
};

exports.findProduct = async (req, res, next) => {
    await productService.getProduct(req.params.productId)
        .then((products) => res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.PRODUCT_MESSAGE.GET, products)))
        .catch(err => next(err));
};

exports.allProduct = async (req, res, next) => {
    await productService.allProduct()
        .then((product) => res.status(200).json((response.responseFromMessage(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.PRODUCT_MESSAGE.GET))))
        .catch(err => next(err));
};

exports.updateProduct = async (req, res, next) => {
    const {id, name, price, description} = req.body;
    await productService.updateProduct(id, name, price, description)
        .then(() => res.status(200).json(response.responseFromMessage(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.PRODUCT_MESSAGE.UPDATE)))
        .catch(err => next(err));
};

exports.deleteProduct = async (req, res, next) => {
    const id = req.params.id;
    await productService.deleteProduct(id)
        .then(() => res.status(200).json(response.responseFromMessage(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.PRODUCT_MESSAGE.DELETE)))
        .catch(err => next(err));
};

exports.findProductsMainCategory = async (req, res, next) => {
    await productService.getProductsMainCategory(req.params.mainCategoryId)
        .then((products) => res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.PRODUCT_MESSAGE.GET, products)))
        .catch(err => next(err));
};
exports.findProductsSubCategory = async (req, res, next) => {
    await productService.getProductsSubCategory(req.params.subCategoryId)
        .then((products) => res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.PRODUCT_MESSAGE.GET, products)))
        .catch(err => next(err));
};