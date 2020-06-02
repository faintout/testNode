const { selectTable, pool, Result } = require("./conncat");

const express = require("express");
const router = express.Router();
router.use((req, res, next) => {
  console.log("路由器执行成功！");
  next();
});
router.get("/", (req, res) => {
  res.send("<h1>我是默认</h1>");
});

router.post("/getstudent", (req, res) => {
  console.log("/getstudents");
  selectTable("students", res, true);
});
router.post("/getworker", (req, res) => {
  console.log("/getworker");
  //   pool.getConnection((err, connect) => {
  //     connect.query("select * from worker", (e, r) => {
  //       res.json(new Result({ data: r, success: ifsucc }));
  //     });
  //     connect.release();
  //   });
  pool.query("select * from worker" , (e, r) =>
    res.json(new Result({ data: r, success:true}))
  );
});
router.post("/getshopes", (req, res) => {
  console.log("/getshopes");
  // selectTable('students',res,true)
  pool.query("select * from shopes", (e, r) =>
    res.json(new Result({ data: r }))
  );
  console.log("/getend");
});
module.exports = router;
