const { router, selectTable,ifSuccess } = require("../index");
router.get("/", (req, res) => {
  console.log("/getStudent");
  selectTable("students", res, ifSuccess(res));
});
module.exports = router;
