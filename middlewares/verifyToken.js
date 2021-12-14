const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.status(403).send("You don't have authorization to see this page");
  } else {
    try {
      const verifiedToken = jwt.verify(token, process.env.TOKEN_KEY);
      req.user = verifiedToken;
      next();
    } catch (err) {
      res
        .status(401)
        .send(
          "You don't have authorization to see this page. Please Sign in or Register"
        );
    }
  }
};

module.exports = verifyToken;
