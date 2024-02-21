const userRepository = require('../repository/userRepository')
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");


exports.isNotLoggedIn = async (req, res, next) => {
    if (!req.isAuthenticated()) next(); else res.status(403).json(response.responseFromMessage(resTEXT.RESPONSE_TEXT.FAIL, resTEXT.AUTH_MESSAGE.FAIL_IS_NOT_LOGIN));
};

exports.isLoggedIn = async (req, res, next) => {
    if (req.isAuthenticated()) next(); else res.status(403).json(response.responseFromMessage(resTEXT.RESPONSE_TEXT.FAIL, resTEXT.AUTH_MESSAGE.FAIL_IS_LOGIN));
};

exports.isPermissionIn = async (req, res, next) => {
    const user = await userRepository.getUserType(req.user.email)
    if (user.userType || req.user.email) next(); else res.status(403).json(response.responseFromMessage(resTEXT.RESPONSE_TEXT.FAIL, resTEXT.AUTH_MESSAGE.FAIL_NOT_PERMISSION));
    // 일단 이렇게 진행하면 화면상에서 본인 회원정보 출력되긴함 
};
// exports.isPermissionIn = async (req, res, next) => {
//     const user = await userRepository.getUserType(req.user.email)
//     if (user.userType || (req.body.email === req.user.email  || req.params.email === req.user.email )) next(); else res.status(403).json(response.responseFromMessage(resTEXT.RESPONSE_TEXT.FAIL, resTEXT.AUTH_MESSAGE.FAIL_NOT_PERMISSION));
//     console.log("body"+req.body.email)
//     console.log("user"+req.user.email) // 여기만 값이 있음 - 다른 곳 수정해야 마이페이지 가능
//     console.log("params"+req.email)
// };

exports.isAdminIn = async (req, res, next) => {
    const user = await userRepository.getUserType(req.user.email)
    if (user.userType) next(); else res.status(403).json(response.responseFromMessage(resTEXT.RESPONSE_TEXT.FAIL,  resTEXT.AUTH_MESSAGE.FAIL_NOT_PERMISSION));
};