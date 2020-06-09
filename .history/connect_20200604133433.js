// const options = require("./option");
const option = {
  host: "MYSQL5005.webweb.com",
  user: "14dbaa9_yhn",
  password: "yhn79037596",
  port: "3306",
  database: "db_14dbaa9_yhn",
  connectTimeout: 5000,
  multipleStatements: false,
};
const mysql = require("mysql");
let pool;
repool();

let msg = "处理成功";
let succ = true;
let code = 200;

function selectTable(value) {
  // return (connQuery = pool.query("select * from " + tableName, (e, r) =>
  //   res.json(new Result({ data: r ,success:ifsucc}))
  // ));
  return new Promise((res, rej) => {
    pool.getConnection((err, conn) => {
      conn.query("select * from " + value, (e, r) => {
        if (e) {
          succ = false;
          code = e.code;
          msg = "处理失败" + e.sqlMessage || "";
        }
        return res(new Result({ code, msg, data: {data:r,title:20}, success: succ }))
      });

      conn.release();
    });
  });
}

// function ifSuccess(res) {
//   return res ? succ : !succ;
// }
function addTbale(tableName,res) {
//   console.log("value", res.req.body);
//   return pool.getConnection((err, conn) => {
//     if (err) throw err;

//     conn.query("INSERT INTO students set ?", res.req.body, (e, r) => {
//       if (e) {
//         msg = "数据添加失败" + e.sqlMessage || "";
//         succ = false;
//         code = e.code;
//       }
//       res.json(new Result({ msg, success: succ }));
//     });
//     conn.release();
//   });
console.log('res.request.body',res.request.body);

  return new Promise((resolve, rej) => {
    pool.getConnection((err, conn) => {
      conn.query("INSERT INTO students set ?" , res.request.body, (e, r) => {
        if (e) {
          succ = false;
          code = e.code;
          msg = "处理失败" + e.sqlMessage || "";
        }
        return resolve(new Result({ code, msg, success: succ }))
      });
      conn.release();
    });
  });
}

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

module.exports = { selectTable, pool, Result, addTbale };
