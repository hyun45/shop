const wishListService = require("../service/wishListService")
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");
const WishList = require("../models/wishList");
const { where } = require("sequelize");

exports.addWishList = async (req, res, next) => {
    const {productId} = req.body;
    await wishListService.toggleWishList(productId, req.user.userId)
        .then(() => res.status(200).json((response.responseFromMessage(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.WISHLIST_MESSAGE.CREATE))))
        .catch(err => next(err));
};

exports.deleteWishListItem = async (req, res, next) => {
    await wishListService.deleteWishListItem(req.params.wishListId)
        .then((wishList) => res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.WISHLIST_MESSAGE.DELETE, wishList)))
        .catch(err => next(err)); 
};

exports.getWishList = async (req, res, next) => {
    await wishListService.getWishList(req.user.userId)
        .then((wishList) => res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.WISHLIST_MESSAGE.GET, wishList)))
        .catch(err => next(err));
};

exports.checkWishList = async (req, res, next) => {
    const { productId, userId } = req.params;

  try {
    // 위시리스트에서 해당 상품을 찾습니다.
    const wishListItem = await WishList.findOne({where: { userId, productId }});

    // 해당 상품이 위시리스트에 있는지 여부에 따라 응답합니다.
    if (wishListItem) {
      res.json({ isInWishList: true }); // 상품이 위시리스트에 있는 경우
    } else {
      res.json({ isInWishList: false }); // 상품이 위시리스트에 없는 경우
    }
  } catch (error) {
    console.error("Error checking wish list:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteWishList = async (req, res, next) => {
    const { productId, userId } = req.params;

    try{
        await WishList.destroy({where : {userId, productId}});
        res.status(200).json({ message: 'Successfully removed from wish list' });
    } catch (error) {
        console.error("Error removing product from wish list:", error);
        res.status(500).json({ error: 'Failed to remove product from wish list' });
    }
}