const express= require("express");
const router=express.Router();

const {verifytoken}= require('../middleware/auth');
const {signup,getUser} = require("../controllers/signup");
const { authToken } = require("../middleware/basicAuth");
const {login,getdata}=require('../controllers/login');



router.post('/signup',signup);
router.get('/getUser',verifytoken,getUser);
router.post('/login',login);
router.get('/getdata',authToken,getdata)

module.exports = {router};