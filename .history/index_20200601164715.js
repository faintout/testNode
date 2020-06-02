var express = require('express');
var router = express.Router();

router.get('/', function(req, res,next) {
    next()
});
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
  router.get("/", (req, res) => {
    console.log("/");
    res.json(我是默认页面)
  });
  
module.exports = router