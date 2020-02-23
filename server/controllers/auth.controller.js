const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  try {
    // Simulate a login endpoint that yield validation tokens.
    // In a real case scenario, the user credentials would be received
    // in the body of the request and compared with the encrypted (probably
    // with "bcryptjs") credentials stored in the database

    let token = jwt.sign({ id: 123 }, process.env.PRIVATE_KEY, {
      expiresIn: "7d"
    });

    res.set("Authorization", token);
    return res.status(200).json({
      token
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
