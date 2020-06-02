const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const router = express.Router();
const connect = require('./connect/connentType') 
// app.use(cors) //解决跨域
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //表单请求
const option = {
  host: "MYSQL5005.webweb.com",
  user: "14dbaa9_yhn",
  password: "yhn79037596",
  port: "3306",
  database: "db_14dbaa9_yhn",
  connectTimeout: 5000,
  multipleStatements: false,
};
app.listen(9797, () => {
  console.log("服务器启动成功");
});
let pool;
repool();
let succ = true;
function ifSuccess(res) {
    return res ? succ : !succ;
}
function selectTable(tableName, res, ifsucc) {
    //   return (connQuery = pool.query("select * from " + tableName, (e, r) =>
    //     res.json(new Result({ data: r ,success:ifsucc}))
    //   ));
    return pool.getConnection((err, conn) => {
        conn.query("select * from " + tableName, (e, r) => {
            res.json(new Result({ data: r, success: ifsucc }));
        });
        conn.release();
    });
}
app.use('/getstudent',connect.getStudent)

function Result({ code = 200, msg = "", data = {}, success = "" }) {
  this.code = code;
  this.msg = msg;
  this.success = success;
  this.data = data;
}

//断线重连
function repool() {
  pool = mysql.createPool({
    ...option,
    waitForConnections: true, //当无连接池可用时，等待 抛出
    connectionLimit: 100, //链接限制数
    queueLimit: 0, //最大链接等待数0 不限制
  });
  pool.on(
    "error",
    (err) => err.code === "PROTOCAL_CONNECTION_LOST" && setTimeout(repool, 2000)
  );
}

module.exports = { pool, Result, router, app ,selectTable,ifSuccess};
