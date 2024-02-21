const express = require('express')
const cartController = require("../controller/cartController");
const authService = require("../service/authService");
const cartRepository = require('../repository/cartRepository');
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");
const router = express.Router();

router.post('/addCart', authService.isLoggedIn, cartController.addCart);
router.get('/delete/:cartItemId', authService.isLoggedIn, cartController.deleteCartItem);
router.get('/:userId', authService.isLoggedIn, cartController.allCartList);
router.put('/:cartItemId', async (req, res) => {
    const { cartItemId } = req.params; // URL에서 cartItemId를 가져옵니다.
    const { newQuantity } = req.body; // 클라이언트에서 보낸 새로운 수량을 가져옵니다.

    console.log(cartItemId, newQuantity)
    try {
        const updatedCartItem = await cartRepository.updateCartItemQuantity(cartItemId, newQuantity);
        res.status(200).json(updatedCartItem);
    } catch (error) {
        console.error('Error updating cart item quantity:', error);
        res.status(500).send('Internal server error');
    }
});

router.use((req, res, next) => {
    next('Not found error!');
});

router.use((err, req, res, next) => {
    res.status(500).json(response.responseFromData(resTEXT.RESPONSE_TEXT.FAIL, resTEXT.CART_MESSAGE.ERROR, err));
});

module.exports = router;