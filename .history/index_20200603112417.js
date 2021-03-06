const { selectTable, pool, Result,addTbale } = require("./conncat");
const Router = require('koa-router');
const router = new Router();



// router.get('/',(ctx ,next)=>{
//     ctx.body = 'hello Koa!'
// })
router.get('/get/:id',(ctx ,next)=>{
    // ctx.body = 'hello Koa!'
    let id = ctx.params.id
    ctx.body = id
})
router.post('/getshopes',(ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin','*')
    // console.log('ctx',ctx.request);
    
    ctx.body = {
        code:1,
        postParams:ctx.request.body
    }
})


router.use((req, res, next) => {
  console.log("路由器执行成功！");
//   next();
});
router.get("/", (ctx, next) => {
  req.body("<h1>服务器请求成功</h1>");
});

router.post("/getstudent", (req, res) => {
  console.log("/getstudents");
  selectTable("students", res);
});
router.post("/getworker", (req, res) => {
  console.log("/getworker");
  selectTable('worker',res);
});
router.post("/getshopes", (req, res) => {
  console.log("/getshopes");
  selectTable('shopes',res);
});
router.put("/addstudent", (req, res) => {
  console.log("/addstudent");
//   console.log(res);
  addTbale(res);
});
module.exports = router;
