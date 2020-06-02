const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        state:200,
        data:'请求成功！'
    })
    res.send('<h1>我是默认</h1>')
})
module.exports = router