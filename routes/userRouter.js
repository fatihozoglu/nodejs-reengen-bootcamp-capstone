const router = require("express").Router();
const { register, login } = require("../controllers/userController");
const registerValidator = require("../middlewares/registerValidator");

router.post("/register", registerValidator, register);
router.post("/login", login);

module.exports = router;
