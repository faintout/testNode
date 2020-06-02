//  app.js 首页
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const router = require("./index"); //  引入路由

//  开启数据库
const connection = mysql.createConnection({
  host: "MYSQL5005.webweb.com",
  user: "14dbaa9_yhn",
  password: "yhn79037596",
  port: "3306",
  database: "db_14dbaa9_yhn",
});

connection.connect(() => {
  console.log("链接成功");
});

app.use(
  bodyParser.urlencoded({
    extends: true,
  })
);

//设置跨域访问
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//  使用路由 /index 是路由指向名称
app.use(`/`, router);

//配置服务端口
var server = app.listen(3001, () => {
  const hostname = "localhost";
  const port = 3001;
  console.log(`Server running at http://${hostname}:${port}/`);
});

// module.exports = { connection };
