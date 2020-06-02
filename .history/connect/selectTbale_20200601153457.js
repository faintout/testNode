const { pool, Result ,app,router } = require("../index");
app.all('*',(req,res,next)=>{
    next()
})

module.exports = selectTable;
