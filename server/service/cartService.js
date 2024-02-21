const cartRepository = require("../repository/cartRepository");
const productRepository = require("../repository/productRepository");

exports.getCart = async (userId) => {
    const carts = await cartRepository.getCart(userId);
    if (!carts) throw `[CartService] ${userId} 정보 없음`;
    return carts;
};

// exports.addCart = async (productId, userId, amount) => {
//     const product = await productRepository.getProduct(productId);
//     if (!product) {
//         console.error(`[CartService] 상품 추가 실패.`)
//         throw `상품 (${productId})가 존재하지 않습니다.`;
//     }
//     await cartRepository.addCart(productId, userId, amount);
// }

// exports.addCart = async (productId, userId, amount) => {
//     const cartItem = await cartRepository.getCartItem(productId, userId); // Check if the product is already in the cart
//     if (cartItem) {
//         // If the product is already in the cart, update the amount
//         await cartRepository.updateCartItemAmount(productId, userId, amount);
//     } else {
//         // If the product is not in the cart, add it to the cart
//         const product = await productRepository.getProduct(productId);
//         if (!product) {
//             console.error(`[CartService] 상품 추가 실패.`)
//             throw `상품 (${productId})가 존재하지 않습니다.`;
//         }
//         await cartRepository.addCart(productId, userId, amount);
//     }
// }
exports.addCart = async (productId, userId, amount) => {
    // Check if the product is already in the cart
    const cartItem = await cartRepository.getCartItem(productId, userId);

    if (cartItem) {
        // If the product is already in the cart, update the amount
        await cartRepository.updateCartItemAmount(productId, userId, amount);
    } else {
        // If the product is not in the cart, add it to the cart
        const product = await productRepository.getProduct(productId);
        if (!product) {
            console.error(`[CartService] 상품 추가 실패.`)
            throw `상품 (${productId})가 존재하지 않습니다.`;
        }
        await cartRepository.addCart(productId, userId, amount);
    }
}

exports.deleteCartItem = async (cartItemId) => {
    await cartRepository.deleteCartItem(cartItemId)
        .catch(err => {
            console.error(`[CartService] 장바구니에서 에러가 발생했습니다. ${err}`)
            throw `장바구니에 (${cartId})가 존재하지 않습니다.`;
        });
};

