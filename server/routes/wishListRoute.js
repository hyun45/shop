const express = require('express');
const authService = require("../service/authService");
const wishListController = require('../controller/wishListController');
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");
const router = express.Router();

router.post('/addWishList', authService.isLoggedIn, wishListController.addWishList);
router.get('/deleteWishList/:wishListId', authService.isLoggedIn, wishListController.deleteWishListItem);
router.get('/:userId', authService.isLoggedIn, wishListController.getWishList);
router.get('/checkWishList/:productId/:userId', authService.isLoggedIn, wishListController.checkWishList);
router.get('/deleteWishList/:productId/:userId', authService.isLoggedIn, wishListController.deleteWishList);

router.use((req, res, next) => {
    next('Not found error!');
});

router.use((err, req, res, next) => {
    res.status(500).json(response.responseFromData(resTEXT.RESPONSE_TEXT.FAIL, resTEXT.WISHLIST_MESSAGE.ERROR, err));
});

module.exports = router;