const orderService = require('../service/orderService');
const response = require("../data/responseFrom")
const resTEXT = require("../data/responseString");

exports.allOrder = async (req, res, next) => {
    await orderService.allOrder()
        .then(() => res.status(200).json((response.responseFromMessage(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.ORDER_MESSAGE.GET))))
        .catch(err => next(err));
};

exports.findOrder = async (req, res, next) => {
    console.log(req.params)
    const userId = req.params.userId;
    if(!userId){
        await orderService.findOrderTime(createdAt)
            .then((orders) => res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.ORDER_MESSAGE.GET, orders)))
            .catch(err => next(err));
    }
    const createdAt = req.params.createdAt;
    console.log(userId, createdAt);
    await orderService.findOrder(userId, createdAt)
        .then((orders) => res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.ORDER_MESSAGE.GET, orders)))
        .catch(err => next(err));
};

exports.findUserOrder = async (req, res, next) => {
    const userId = req.user.userId;
    await orderService.findUserOrder(userId)
        .then((orders) => res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.ORDER_MESSAGE.GET, orders)))
        .catch(err => next(err));
};
