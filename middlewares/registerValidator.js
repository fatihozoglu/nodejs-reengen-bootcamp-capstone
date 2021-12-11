const { body, validationResult } = require("express-validator");

const registerValidator = async (req, res, next) => {
  const validations = [
    body("username").isLength({ min: 8 }).isAlpha(),
    body("email").isEmail(),
    body("password").isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
    }),
    body("userStatus").isIn(["admin", "user"]),
  ];

  for (let validation of validations) {
    const result = await validation.run(req);
    if (result.errors.length) break;
  }
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  res.status(400).send(errors);
};

module.exports = registerValidator;
