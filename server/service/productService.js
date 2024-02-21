const productRepository = require("../repository/productRepository");

exports.createProduct = async (name, price, stock, description, mainCategoryId, subCategoryId, image1, userId) => {
    const product = await productRepository.getProduct(name);
    if (product) {
        console.error(`[ProductService] 상품 추가 실패.`)
        throw `상품 (${name})가 이미 존재합니다.`;
    }
    await productRepository.createProduct(name, price, stock, description, mainCategoryId, subCategoryId, image1, userId);
};

exports.getProduct = async (productId) => {
    const product = await productRepository.getProduct(productId);
    if (!product) throw `[ProductService] ${productId} 상품 없음`;
    return product;
};

exports.allProduct = async () => {
    console.log(`[ProductService] 상품 정보 요청`);
    const product = await productRepository.allProduct()
    if (!product) {
        console.error(`[productService] 상품 정보 없음`);
        throw `상품 정보 없음`;
    }
    return product;
};

exports.updateProduct = async (productId, name, price, description) => {
    const product = await productRepository.updateProduct(productId, name, price, description);
    if (!product) {
        console.error(`[productService] 상품 정보 업데이트 실패`)
        throw '업데이트 실패!';
    }
    console.log(`${id}번 상품 정보 업데이트 완료`);
};

exports.deleteProduct = async (productId) => {
    const product = await productRepository.deleteProduct(productId);
    if (!product) {
        console.error(`[productService] 상품 정보 삭제 실패`)
        throw '삭제 실패!';
    }
    console.log(`상품: ${productId} 삭제 완료`);
};

exports.getProductsMainCategory = async (mainCategoryId) => {
    const products = await productRepository.getProductsMainCategory(mainCategoryId);
    if(!products) throw `[ProductService] ${mainCategoryId} 상품 없음`;
    return products;
};
exports.getProductsSubCategory = async (subCategoryId) => {
    const products = await productRepository.getProductsSubCategory(subCategoryId);
    if(!products) throw `[ProductService] ${subCategoryId} 상품 없음`;
    return products;
};