// const Cart = require("../models/cart");
const CartItem = require("../models/cartItem");
const Product = require("../models/product")

exports.deleteCartItem = (cartItemId) => CartItem.destroy({where: {cartItemId}});

exports.getCart = (userId) => CartItem.findAll({where: {userId}});



exports.addCart = (productId, userId, amount) => CartItem.create({productId :productId, userId : userId, amount : amount});

exports.getCartItem = (productId, userId) => CartItem.findOne({ where: { productId, userId } });
  
// exports.updateCartItemAmount = (productId, userId, amount) => CartItem.update({ amount }, { where: { productId, userId } });
exports.updateCartItemAmount = async (productId, userId, amountToAdd) => {
    const cartItem = await CartItem.findOne({ where: { productId, userId } });

    if (!cartItem) {
        throw new Error('CartItem not found');
    }

    const newAmount = cartItem.amount + amountToAdd;

    return CartItem.update({ amount: newAmount }, { where: { productId, userId } });
};
  

exports.updateCartItemQuantity = async (cartItemId, newQuantity) => {
    try {
        // Sequelize를 사용하여 해당 카트 항목을 찾습니다.
        const cartItem = await CartItem.findByPk(cartItemId);

        if (!cartItem) {
        throw new Error('CartItem not found');
        }

        // 수량을 업데이트합니다.
        cartItem.amount = newQuantity;

        // 데이터베이스에 변경 사항을 저장합니다.
        await cartItem.save();

        return cartItem; // 업데이트된 카트 항목을 반환할 수도 있습니다.
    } catch (error) {
        console.error('Error updating cart item quantity:', error);
        throw error;
    }
};