const router = require("express").Router();
const { register, login, verify } = require("../controllers/userController");
const registerValidator = require("../middlewares/registerValidator");
const verifyToken = require("../middlewares/verifyToken");

router.post("/register", registerValidator, register);
router.post("/login", login);
router.post("/check", verifyToken, verify);

module.exports = router;
