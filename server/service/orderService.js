const orderRepository = require('../repository/orderRepository');

exports.allOrder = async () => {
    console.log(`[orderService] 주문 정보 요청`);
    const order = await orderRepository.allOrder()
    if (!order) {
        console.error(`[orderService] 주문 정보 없음`);
        throw `주문 정보 없음`;
    }
    return order;
}

exports.findOrder = async (userId, createdAt) => {
    const orderItem = orderRepository.findOrder(userId, createdAt);
    if(!orderItem) throw `[orderService] 주문 정보 없음`;
    return orderItem;
}

exports.findOrderTime = async (createdAt) => {
    const orderItem = orderRepository.findOrderTime(createdAt);
    if(!orderItem) throw `[orderService] 주문 정보 없음`;
    return orderItem;
}

exports.findUserOrder = async (userId) => {
    const orderItem = orderRepository.findUserOrder(userId);
    if(!orderItem) throw `[orderService] 주문 정보 없음`;
    return orderItem;
}