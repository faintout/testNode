const { selectTable，Result } = require("../index");
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
let succ = true;
function ifSuccess(res) {
    return res ? succ : !succ;
}
const express = require("express");
const router = express.Router()

router.use('*',(req,res,next)=>{
    next()
})

router.post("/getstudent", (req, res) => {
  console.log("/getStudent");
  selectTable("students", res, ifSuccess(res));
});
router.post("/getshopes", (req, res) => {
  console.log("/getshopes");
  selectTable("shopes", res, ifSuccess(res));
});
router.post("/getworker", (req, res) => {
  console.log("/getworker");
  selectTable("worker", res, ifSuccess(res));
});
module.exports = router;
