var express = require("express");
const bcrypt = require("bcrypt");
require("dotenv").config();
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/verify", async function (req, res) {
  try {
    const currentPasswordHash = process.env.PORTAL_PASSWORD;
    const userPassword = req.body.password;

    if (currentPasswordHash === userPassword) {
      res.status(200).json({ success: true });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: "Incorrect Password" });
  }
});

module.exports = router;
