const { selectTable, pool, Result } = require("./conncat");
const express = require("express");
const router = express.Router();

let succ = true;
function ifSuccess(res) {
  return res ? succ : !succ;
}

router.use((req, res, next) => {
  console.log("路由器执行成功！");
  next();
});
router.get("/", (req, res) => {
  res.send("<h1>服务器请求成功</h1>");
});

router.post("/getstudent", (req, res) => {
  console.log("/getstudents");
  selectTable("students", res, ifSuccess(res));
});
router.post("/getworker", (req, res) => {
  console.log("/getworker");
  selectTable('worker',res,ifSuccess(res));
});
router.post("/getshopes", (req, res) => {
  console.log("/getshopes");
  selectTable('shopes',res,ifSuccess(res));
});
router.put("/getshopes", (req, res) => {
  console.log("/getshopes");
  selectTable('shopes',res,ifSuccess(res));
});
module.exports = router;
