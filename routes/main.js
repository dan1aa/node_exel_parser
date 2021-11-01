const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).end("Main page");
});

module.exports = router;