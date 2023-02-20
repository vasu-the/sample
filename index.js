require('./mongoose/db')
const express=require('express');
const { router } = require('./routers/route');

require("dotenv").config();

const port=3000;

const app=express();

app.use(express.json());
app.use('/',router);



app.listen(3000,function(){
    console.log("App is listening :",{port});
})