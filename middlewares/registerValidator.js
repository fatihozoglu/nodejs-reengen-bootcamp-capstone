const { body, validationResult } = require("express-validator");

const registerValidator = async (req, res, next) => {
  const validations = [
    body("username")
      .isLength({ min: 8 })
      .withMessage("must be at least 8 chars long")
      .isAlpha()
      .withMessage("username should contain letters only"),
    body("email").isEmail().withMessage("Please enter a valid email adress"),
    body("password")
      .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      })
      .withMessage("min. 8 chars, min. 1 uppercase, min. 1 number"),
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
