const { router, selectTable,ifSuccess } = require("../index");
router.post("/getStudent", (req, res) => {
  console.log("/getStudent");
  selectTable("students", res, ifSuccess(res));
});
// router.post("/getShopes", (req, res) => {
//   console.log("/getShopes");
//   selectTable("shopes", res, ifSuccess(res));
// });
// router.post("/getWorker", (req, res) => {
//   console.log("/getWorker");
//   selectTable("worker", res, ifSuccess(res));
// });

module.exports = router;
