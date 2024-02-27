const wishListRepository = require('../repository/wishListRepository');

// exports.addWishList = async (productId, userId) => {
//     const wishListItem = await wishListRepository.getWishListItem(productId, userId);

//     if(!wishListItem){
//         await wishListRepository.addWishList(productId, userId);
//     } else{
//         await wishListRepository.deleteWishListItem(productId, userId);
//     };
// };

// 위시리스트에 상품을 추가하거나 제거하는 함수
exports.toggleWishList = async (productId, userId) => {
    try {
        // 해당 상품이 위시리스트에 있는지 확인
        const wishListItem = await wishListRepository.getWishListItem(userId, productId);

        if (!wishListItem) {
            // 위시리스트에 없는 경우, 상품을 추가
            await wishListRepository.addWishList(productId, userId);
            return { message: '상품을 위시리스트에 추가했습니다.' };
        } else {
            // 위시리스트에 있는 경우, 상품을 제거
            await wishListRepository.deleteWishListItem(productId, userId);
            return { message: '상품을 위시리스트에서 제거했습니다.' };
        }
    } catch (error) {
        // 오류 발생 시 에러 메시지 반환
        return { error: error.message };
    }
};

exports.deleteWishListItem = async (wishListId) => {
    await wishListRepository.deleteWishListItem2(wishListId)
    .catch(err => {
        console.error(`[wishListService] 찜목록 에러가 발생했습니다. ${err}`)
        throw `찜목록에 (${wishListId})가 존재하지 않습니다.`;
    });
};

exports.getWishList = async (userId) => {
    const wishList = await wishListRepository.getWishList(userId);
    if (!wishList) throw `[wishListService] ${userId} 정보 없음`;
    return wishList;
};