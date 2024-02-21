const express = require('express');
const indexController = require("../controller/indexController");
const authService = require("../service/authService");
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");

const router = express.Router();

router.get('/', indexController.index)
router.get('/user', authService.isLoggedIn, authService.isAdminIn, indexController.usersIndex);
router.get('/product', indexController.productsIndex);
router.get('/admin', authService.isAdminIn)


router.use((err, req, res, next) => {
    res.status(500).json(response.responseFromData(resTEXT.RESPONSE_TEXT.FAIL, resTEXT.INDEX_MESSAGE.ERROR, err));
});

module.exports = router;
