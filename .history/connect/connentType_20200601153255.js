const { router, selectTable,ifSuccess } = require("../index");
router.post("/getStudent", (req, res) => {
  console.log("/getStudent");
  selectTable("students", res, ifSuccess(res));
});
module.exports = router;
