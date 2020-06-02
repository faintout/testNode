const {selectTable,pool ,Result} = require('./conncat')
const express = require("express");
const router = express.Router();
router.use((req, res, next) => {
  console.log("路由器执行成功！");
  next();
});
router.get("/", (req, res) => {
  res.send('<h1>我是默认</h1>')
});

router.post("/getstudent", (req, res) => {
    console.log('/getstudents');
    selectTable('students',res,true)
  });
router.post("/getshopes", (req, res) => {
    console.log('/getshopes');
    // selectTable('students',res,true)
    pool.query("select * from " + tableName, (e, r) =>
        res.json(new Result({ data: r }
    )))
  });
module.exports = router;

