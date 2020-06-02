const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const router = express.Router();
const app = express();
// app.use(cors) //解决跨域
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //表单请求






app.listen(9797, () => {
  console.log("服务器启动成功");
});

