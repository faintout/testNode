const { selectTable,ifSuccess } = require("../index");
const express = require("express");
const router = express.Router()
router.get("/", (req, res) => {
  console.log("/getStudent");
  selectTable("students", res, ifSuccess(res));
});
module.exports = router;
