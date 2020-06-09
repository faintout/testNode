const { selectTable, pool, Result, addTbale } = require("./conncat");
const Router = require("koa-router");
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "<h1>服务器请求成功</h1>";
});
// router.get("/get/:id", (ctx, next) => {
//   // ctx.body = 'hello Koa!'
//   let id = ctx.params.id;
//   ctx.body = id;
// });

//学生信息
router.post("/getstudent", async(ctx, next) => {
  console.log("/getstudents");
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.body = await selectTable("students");
});

//商品信息
router.post("/getshopes", async(ctx, next) => {
  console.log("/getshopes");
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.body = await selectTable("shopes");
});

//工人信息
router.post("/getworker", async(ctx, next) => {
    console.log("/getworker");
    ctx.body = selectTable("worker", res);
  });
// router.use((req, res, next) => {
//   console.log("路由器执行成功！");
//   next();
// });
router.get("/", (req, res) => {
  res.send("<h1>服务器请求成功</h1>");
});

router.post("/getworker", (req, res) => {
  console.log("/getworker");
  selectTable("worker", res);
});
router.post("/getshopes", (req, res) => {
  console.log("/getshopes");
  selectTable("shopes", res);
});
router.put("/addstudent", (req, res) => {
  console.log("/addstudent");
  //   console.log(res);
  addTbale(res);
});
module.exports = router;
