const express = require("express");
const router = express.Router();

const userRouter = require("./User");
const storiesRouter = require("./Stories");

router.get("/", (req, res) => {
  res.send("This is for project");
});

router.use("/user", userRouter);
router.use("/stories", storiesRouter);

module.exports = router;
