const express = require('express');
const routes = express.Router();

routes.post('/',(req,res)=>{
    console.log(req.body);
    return res.json({status:'200'})
});

module.exports = routes