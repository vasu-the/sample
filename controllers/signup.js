const User = require('../models/users')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SignInUser = async (req, res) => {
  const getUser = {
    Fullname: req.body.Fullname,
    Lastname: req.body.Lastname,
    Email: req.body.Email,
    Password: req.body.Password,
    // book: []
  }
try {
   getUser.Password = await bcrypt.hash(getUser.Password, 12)

   const user = await new User(getUser).save();
   
    user.Password = null;
   
    return res.status(200).send({ data: user, msg: "User Added Successfully" })
    
  
  } catch(err) {
    console.log(err);
    return res.status(500).send({ msg: "Something went Worng" })
  }
}

const LoginUser = async (req, res) => {
  try {
    const checkUser = await User.findOne({ Fullname: req.params.Fullname })
    //Check User
    if (checkUser === null) {
      return res.status(404).send({ msg: "User not Exits" })
    }
    //Verify Password
    const verifyPassword = await bcrypt.compare(req.params.Password, checkUser.Password);
    console.log(verifyPassword);
    if (!verifyPassword) {
      return res.status(500).send({ msg: "Invalid Password" })
    }
    //Token generation 
    const token = jwt.sign({ data: checkUser._id }, "secretkey", { expiresIn: "1d" });
    return res.status(200).send({ data: token, msg: "Successfully Verified" })
  } catch (err) {
    console.log(err)
    return res.status(400).send({ msg: "Something is Worng" })
  }
}
module.exports = { SignInUser, LoginUser };