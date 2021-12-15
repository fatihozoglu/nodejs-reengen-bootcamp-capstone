const router = require("express").Router();
const factoryRouter = require("./factoryRouter");
const userRouter = require("./userRouter");
const unitRouter = require("./unitRouter");

router.use("/", userRouter);
router.use("/factories", factoryRouter);
router.use("/units", unitRouter);

module.exports = router;
