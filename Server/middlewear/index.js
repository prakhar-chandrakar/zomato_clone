const jwt = require("jsonwebtoken");

const SECRET = "ZoMaT0";
const SECRETuser = "zOmAt0";

const authenticateJWT_admin = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1]; //Bearer vcgvHKjcvyBHCBYUIAHAWEBFYUBsehj>kCBALUSWE
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ error: err }); // 403 forbidden
      }
      console.log("--> Admin authenticated...");
      req.user = user;
      // console.log(req.user);
      next();
    });
  } else {
    return res.status(401); // 401 Unauthorized response
  }
};

const authenticateJWT_user = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRETuser, (err, user) => {
      if (err) {
        return res.status(403).json({ error: err });
      }
      console.log("--> User authenticated...");
      req.user = user;
      // console.log(req.user);
      next();
    });
  } else {
    return res.status(401);
  }
};

module.exports = {
  authenticateJWT_admin,
  authenticateJWT_user,
  SECRET,
  SECRETuser,
};
