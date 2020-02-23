const jwt = require("jsonwebtoken");

const checkAuthToken = async (req, res, next) => {
  let token = req.headers["authorization"];

  // Check if token is valid
  jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return next(err);
    }
    next();
  });
};

module.exports = { checkAuthToken };
