const cartService = require("../service/cartService")
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");

exports.addCart = async (req, res, next) => {
    const {productId, amount} = req.body;
    await cartService.addCart(productId, req.user.userId, amount)
        .then(() => res.status(200).json((response.responseFromMessage(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.CART_MESSAGE.CREATE))))
        .catch(err => next(err));
};

exports.allCartList = async (req, res, next) => {
    await cartService.getCart(req.user.userId)
        .then((cart) => res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.CART_MESSAGE.GET, cart)))
        .catch(err => next(err));
};

exports.deleteCartItem = async (req, res, next) => {
    await cartService.deleteCartItem(req.params.cartItemId)
        .then((cart) => res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.CART_MESSAGE.DELETE, cart)))
        .catch(err => next(err));
};