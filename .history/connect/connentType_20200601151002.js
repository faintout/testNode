
const { pool, Result } = require("../index");

app.post("/getStudent", (req, res) => {
    console.log("/getStudent");
    selectTable("students", res, ifSuccess(res));
  });
  app.post("/getShopes", (req, res) => {
    console.log("/getShopes");
    selectTable("shopes", res, ifSuccess(res));
  });
  app.post("/getWorker", (req, res) => {
    console.log("/getWorker");
    selectTable("worker", res, ifSuccess(res));
  });

  module.exports = app