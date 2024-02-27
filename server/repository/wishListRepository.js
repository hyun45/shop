const WishList = require('../models/wishList');

exports.addWishList = (productId, userId) => WishList.create({productId: productId, userId: userId});

exports.deleteWishListItem = (productId, userId) => WishList.destroy({where : {userId, productId}});

exports.deleteWishListItem2 = (wishListId) => WishList.destroy({where : {wishListId}});

exports.getWishList = (userId) => WishList.findAll({where : {userId}}); 

exports.getWishListItem = (userId, productId) => WishList.findOne({where : {userId, productId}}); 