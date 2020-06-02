const express = require("express");
const router = express.Router();
router.use((req, res, next) => {
  console.log("路由器执行成功！");
  next();
});
router.get("/", (req, res) => {
  res.json({
    state: 200,
    data: "请求成功！",
  });
  // res.send('<h1>我是默认</h1>')
});
module.exports = router;
