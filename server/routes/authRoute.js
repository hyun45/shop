const express = require('express')
const router = express.Router();
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");
const authService = require("../service/authService");
const authController = require("../controller/authController")


router.post('/login', authService.isNotLoggedIn, authController.login);

router.post('/logout', authService.isLoggedIn, authController.logout);


router.use((req, res, next) => {
    next('Not found error!');
});

router.use((err, req, res, next) => {
    res.status(500).json(response.responseFromData(resTEXT.RESPONSE_TEXT.FAIL, resTEXT.AUTH_MESSAGE.FAIL, err));
});

module.exports = router;