const {selectTable } = require('./conncat')
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
module.exports = router;

