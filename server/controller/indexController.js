const userService = require("../service/userService");
const productService = require("../service/productService");
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");

exports.index = async (req, res) => res.status(200).send("<h1>Test</h1>");

exports.usersIndex = async (req, res, next) => {
    await userService.findAllUser()
        .then((users) => res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.USER_MESSAGE.GET, users)))
        .catch(err => {
            console.error(err);
            next(err);
        });
};

exports.productsIndex = async (req, res, next) => {
    await productService.allProduct()
        .then((products) => res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.PRODUCT_MESSAGE.GET, products)))
        .catch(err => {
            console.error(err);
            next(err);
        });
};