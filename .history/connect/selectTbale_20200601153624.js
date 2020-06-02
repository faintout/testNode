const { pool, Result ,app,router } = require("../index");
const student = require('./connentType')
app.all('*',(req,res,next)=>{
    next()
})

app.use('/get',student)
app.listen(9797, () => {
    console.log("服务器启动成功");
  });
module.exports = selectTable;
