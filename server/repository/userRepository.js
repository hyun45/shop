const User = require('../models/user');


exports.findUserByEmail = (email) => User.findOne({where: {email}});

exports.createUser = (email, name, password, phone) => User.create({
    email, name, password, phone, userType: false
});

exports.findAllUser = () => User.findAll({attributes: ['email', 'name', 'phone']});


exports.getUser = (userId) => User.findOne({where: {userId}, attributes: ['userId', 'email', 'name', 'phone', 'zipCode', 'address1', 'address2']});


exports.addAdmin = (email) => User.update({userType: true}, {where: {email}});

exports.denyAdmin = (email) => User.update({userType: false}, {where: {email}});


exports.deleteUser = (email) => User.destroy({where: {email}});

exports.updateUser = (email, phone, address1, address2, zipCode) => User.update({phone}, {where: {email, address1, address2, zipCode}});

exports.getUserType = (email) => User.findOne({where: {email}, attributes: ['userType']});

