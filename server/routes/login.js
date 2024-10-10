const express = require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    console.log('hello from login server');
    res.send('login page here')
})

module.exports = routes;
