const { selectTable, pool, Result,addTbale } = require("./conncat");
const express = require("express");
const route = require('koa-router');
const router = new route();



// router.use((req, res, next) => {
//   console.log("路由器执行成功！");
//   next();
// });
// router.get("/", (req, res) => {
//   res.send("<h1>服务器请求成功</h1>");
// });

router.post("/getstudent", (res) => {
  console.log("/getstudents");
  selectTable("students", res);
});
router.post("/getworker", (req, res) => {
  console.log("/getworker");
  selectTable('worker',res);
});
router.post("/getshopes", (req, res) => {
  console.log("/getshopes");
  selectTable('shopes',res);
});
router.put("/addstudent", (req, res) => {
  console.log("/addstudent");
//   console.log(res);
  addTbale(res);
});
module.exports = router;
