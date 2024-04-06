var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/cookie", function (req, res, next) {
  const cookies = req.cookies;
  res.json({cookies});
});

router.get("/remove-cookie", function (req, res, next) {
  res.clearCookie("token");
  res.json({ message: "Cookie removed" });
});
//31 Oct 2021 07:28:00 GMT
module.exports = router;
