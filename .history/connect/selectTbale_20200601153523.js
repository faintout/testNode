const { pool, Result ,app,router } = require("../index");
app.all('*',(req,res,next)=>{
    next()
})

app.use('/get',student)

module.exports = selectTable;
