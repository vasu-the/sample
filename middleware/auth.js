const jwt = require("jsonwebtoken");
const verifytoken= (req, res, next) => {
 //const authHeader = req.headers.authorization;
 const authHeader = req.body.authorization;

 if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, 'secretkey', (err, user) => {
          if (err) {
            console.log("err",err)
              return res.sendStatus(500);
          }
          req.user= user;
          next();
      });
  } else {
      res.status(401);
  }
};
module.exports={verifytoken};