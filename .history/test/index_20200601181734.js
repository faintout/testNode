const express = require(`express`)
const router = express.Router()
const {connection } = require('./app')


router.use((req, res, next) => {
  console.log(`路由执行成功啦~~~`, Date.now());
  next()
})


router.get(`/`, (req, res, next) => {
  res.json({
    status: 200,
    data: `请求成功`
  })
})


router.get(`/data`, (req, res, next) => {
  res.json({
    status: 200,
    data: [1, 2, 3, 4, 5, 6, 7]
  })
})
router.post('/getworker',(req,res)=>{
    connection.query('select * from worker',(e,r)=>{
    })
})

module.exports = router