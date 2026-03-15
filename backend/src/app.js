const express = require('express');
const router= require('../src/routes/auth.routes');
const foodroutes = require('../src/routes/foodroutes')
const cookieParser = require('cookie-parser')


const app = express();
app.use(cookieParser());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("aditya kumar");
})
app.use('/api/auth',router)
app.use('/api/food',foodroutes);


module.exports = app;