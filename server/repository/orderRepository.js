const OrderItem = require('../models/orderItem');

exports.allOrder = () => OrderItem.findAll({});

exports.findOrder = (userId, createdAt) =>  OrderItem.findAll({where : {userId, createdAt}})

exports.findOrderTime = (createdAt) =>  OrderItem.findAll({where : {createdAt}})

exports.findUserOrder = (userId) => OrderItem.findAll({where : {userId}});