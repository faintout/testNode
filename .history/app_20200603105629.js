// const express = require("express");
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
// const app = express();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const router = require('./index');
// app.use(cors) //解决跨域
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false })); //表单请求

router.get('/',(ctx ,next)=>{
    ctx.body = 'hello Koa!'
})
router.get('/get/:id',(ctx ,next)=>{
    // ctx.body = 'hello Koa!'
    console.log('id',ctx);
    
    // let id = ctx.request.params.id
    // ctx.body = id
})

// app.use('/',router)

// app.use(router.routes())
// app.use(router.allowedMethods())

// app.use( async (ctx,next)=>{ 
//     ctx.body='hello koa2'
//     // console.log('ctx',ctx);
//     // await next()
// })
app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(9797, () => {
  console.log("服务器启动成功");
});
//解决跨域
// app.all('*',function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     if (req.method == 'OPTIONS') {
//       res.send(200);
//     }
//     else {
//       next();
//     }
//   });

// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });