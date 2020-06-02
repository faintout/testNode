
const { router ,selectTable} = require("../index");
router.getStudent.post("/getStudent", (req, res) => {
    console.log("/getStudent");
    selectTable("students", res, ifSuccess(res));
  });
  router.getShopes.post("/getShopes", (req, res) => {
    console.log("/getShopes");
    selectTable("shopes", res, ifSuccess(res));
  });
  router.getWorker.post("/getWorker", (req, res) => {
    console.log("/getWorker");
    selectTable("worker", res, ifSuccess(res));
  });

module.exports = router