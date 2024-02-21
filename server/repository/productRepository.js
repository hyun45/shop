const Product = require("../models/product");

exports.createProduct = (name, price, stock, description, mainCategoryId, subCategoryId, image1, userId) => Product.create({
    name, price, stock, description, mainCategoryId, subCategoryId, image1, userId
});

exports.getProduct = (productId) => Product.findOne({
    where: {productId}, attributes: ['productId', 'name', 'price', 'description', 'image1']
});

exports.allProduct = () => Product.findAll({});

exports.updateProduct = (productId, name, price, description) => Product.update({
    name, price, description
}, {where: {productId}});

exports.deleteProduct = (productId) => Product.destroy({where: {productId}});

exports.getProductsMainCategory = (mainCategoryId) => Product.findAll({where: {mainCategoryId}, attributes: ['productId', 'name', 'price', 'description', 'image1']
});
exports.getProductsSubCategory = (subCategoryId) => Product.findAll({where: {subCategoryId}, attributes: ['productId', 'name', 'price', 'description', 'image1']
});