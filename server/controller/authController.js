const passport = require('passport');
const response = require("../data/responseFrom");
const resTEXT = require("../data/responseString");

exports.login = (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
      if (authError) {
        return next(authError);
      }
      
      if (!user) {
        return res.status(401).json(response.responseFromMessage(resTEXT.RESPONSE_TEXT.FAIL, resTEXT.AUTH_MESSAGE.INVALID_CREDENTIALS));
      }
  
      req.login(user, (loginError) => {
        if (loginError) {
          return next(loginError);
        }
  
        return res.status(200).json(response.responseFromData(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.AUTH_MESSAGE.SUCCESS, {
          userInfo: {
            userId: user.userId,
            userEmail: user.email,
            userName: user.name,
            userPhone: user.phone
          }
        }));
      });
    })(req, res, next);
  };

  exports.logout = async (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
  
      req.session.destroy((destroyErr) => {
        if (destroyErr) {
          return next(destroyErr);
        }
  
        res.clearCookie('session-cookie');
        res.clearCookie('userId');
        return res.json(response.responseFromMessage(resTEXT.RESPONSE_TEXT.SUCCESS, resTEXT.AUTH_MESSAGE.SUCCESS));
      });
    });
  };