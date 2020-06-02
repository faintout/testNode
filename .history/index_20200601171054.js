const express = require("express");

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('<h1>我是默认</h1>')
})
module.exports = router