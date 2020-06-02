var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('this is aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
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
  
module.exports = router