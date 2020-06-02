const { selectTable,ifSuccess } = require("../index");
const router = express.Router()
router.get("/", (req, res) => {
  console.log("/getStudent");
  selectTable("students", res, ifSuccess(res));
});
module.exports = router;
