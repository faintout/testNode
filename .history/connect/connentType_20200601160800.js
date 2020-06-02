const { selectTable,ifSuccess } = require("../index");
const express = require("express");
const router = express.Router()


router.post("/getstudent", (req, res) => {
  console.log("/getStudent");
  selectTable("students", res, ifSuccess(res));
});
router.post("/getshopes", (req, res) => {
  console.log("/getshopes");
  selectTable("shopes", res, ifSuccess(res));
});
router.post("/getworker", (req, res) => {
  console.log("/getworker");
  selectTable("worker", res, ifSuccess(res));
});
module.exports = router;
