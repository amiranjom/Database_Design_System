var express = require('express')

var router = express()

router.post('/test',(req,res)=>{
    res.send("Test")
})

module.exports = router;