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

function selectTable(tableName, res, ifsucc) {
  // return (connQuery = pool.query("select * from " + tableName, (e, r) =>
  //   res.json(new Result({ data: r ,success:ifsucc}))
  // ));
  return pool.getConnection((err, conn) => {
    conn.query("select * from " + tableName, (e, r) =>
      res.json(new Result({ data: r, success: ifsucc }))
    );
    conn.release();
  });
}
function addTbale() {
  return pool.getConnection((err, conn) => {
    conn.query(
      "INSERT INTO student(`name`,`sex`,`age`, `address`) VALUES ?",value,
      (e, r) => {
          let msg = '数据添加成功';
        if (e) {
            msg = '数据添加失败'+e.message
        }
        res.json(new Result({ success:ifsucc}))
      }
    );
    conn.release();
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

module.exports = { selectTable, pool, Result };
