const { pool, Result ,app,router } = require("../index");
const student = require('./connentType')
app.all('*',(req,res,next)=>{
    next()
})

app.use('/get',student)

module.exports = selectTable;
