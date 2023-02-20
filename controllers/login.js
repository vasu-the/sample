const model = require('../models/users');
const jwt = require('jsonwebtoken');

const login = (req, res) => {

  try {
    const user = new model({
      username: req.body.username,
      password: req.body.password
    })
    user.save((err, user) => {
      if (err) console.log(err)
      console.log(user)
    })

    const token = jwt.sign({ user }, 'secretkey');
    console.log("accessToken", token)
    if (token)
      return res
        .status(200)
        .json({
          msg: 'success',
          data: { token }
        });
  }
  catch (error) {
    res
      .status(500)
      .json({ message: error });
  }
}
const getdata = (req, res) => {
  try {
    console.log('req', req)
    return res
      .status(200)
      .json({
        message: 'success',
        data: {  }
      })

  }
  catch (error) {
    res
      .status(500)
      .json({ message: error });
  }
}


module.exports = { login, getdata };

