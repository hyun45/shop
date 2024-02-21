const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const authService = require("../service/authService");
const userController = require("../controller/userController");
const indexController = require("../controller/indexController");
const productController = require("../controller/productController");
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");
const multer = require("multer");


router.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'upload/');
    }, filename: function(req, file, cb){
        cb(null, `${Date.now()}_${file.originalname}`);
        // cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage:storage});

router.post('/image', upload.single('image'), (req, res) => {
    const imagePath = req.file.path;
    res.json({imagePath});
})


router.get('/user', authService.isLoggedIn, authService.isAdminIn, indexController.usersIndex);
router.get('/user/:userId',authService.isLoggedIn, authService.isAdminIn,  userController.getUser);
router.get('/product',authService.isLoggedIn, authService.isAdminIn,  indexController.productsIndex);
router.get('/product/:productId', authService.isLoggedIn, authService.isAdminIn, productController.findProduct);
router.post('/product/createProduct', authService.isLoggedIn, authService.isAdminIn, productController.createProduct);
router.post('/product/updateProduct', authService.isLoggedIn, authService.isAdminIn, productController.updateProduct);
router.get('/product/deleteProduct/:productId', authService.isLoggedIn, authService.isAdminIn, productController.deleteProduct)

router.use((req, res, next) => {
    next('Not found error!');
});

router.use((err, req, res, next) => {
    res.status(500).json(response.responseFromData(resTEXT.RESPONSE_TEXT.FAIL,resTEXT.ADMIN_MESSAGE.ERROR, err));
});


module.exports = router;