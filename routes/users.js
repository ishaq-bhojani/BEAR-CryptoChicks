var express = require("express");
var router = express.Router();

const chain = require("../services/db");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/properties", function(req, res) {
  res.send(chain.All("property"));
});

module.exports = router;
