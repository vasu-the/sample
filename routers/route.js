const express= require("express");
const router=express.Router();

const {LoginUser,SignInUser} = require("../controllers/signup");

router.get('/api',(req,res)=>{
console.log('hello world')
return res.json('hello world')
})

router.post('/signup',SignInUser);
router.post('/login',LoginUser)



module.exports = {router};