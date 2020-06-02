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
// router.get("/cc", (req, res) => {
//   res.send("<h1>我是默认</h1>");
// });

// router.post("/getstudent", (req, res) => {
//   console.log("/getstudents");
//   selectTable("students", res, true);
// });
router.get("/", (req, res) => {
  console.log("/getworker");
  //   console.log('JSON.stringify(pool)',pool);
  //   res.send({})
  selectTable('worker',res,ifSuccess(res));
  // pool.getConnection((err, connect) => {

  //   connect.query("select * from worker", (e, r) => { res.json({data:r,success:ifSuccess});});
  //   connect.release();
  // });
  //   pool.query("select * from worker" , (e, r) =>
  //     res.json({data:r})
  //   );
});
// router.post("/getshopes", (req, res) => {
//   console.log("/getshopes");
//   // selectTable('students',res,true)
//   pool.query("select * from shopes", (e, r) =>
//     res.json(new Result({ data: r }))
//   );
//   console.log("/getend");
// });
module.exports = router;
