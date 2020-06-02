const { pool, Result ,app,router } = require("../index");
app.all('*',(req,res,next)=>{
    next()
})

app.use('/get')

module.exports = selectTable;
