const option = require("./option");
const mysql = require("mysql");
let pool;
repool();

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

module.exports = { selectTable , pool };
