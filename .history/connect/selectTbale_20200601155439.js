const { pool, Result ,app, } = require("../index");
const router = require('./connentType')
app.all('*',(req,res,next)=>{
    next()
})

app.use('/',router)
app.listen(9797, () => {
    console.log("服务器启动成功");
  });

