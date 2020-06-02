const { pool, Result ,app, } = require("../index");
const student = require('./connentType')
app.all('*',(req,res,next)=>{
    next()
})

app.use('/get',router)
app.listen(9797, () => {
    console.log("服务器启动成功");
  });

