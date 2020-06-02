const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const router = require('./index');
const app = express();
app.use(cors) //解决跨域
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //表单请求


app.use('/',router)



app.listen(9797, () => {
  console.log("服务器启动成功");
});
//解决跨域
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
      res.send(200);
    }
    else {
      next();
    }
  });
