const jwt = require('jsonwebtoken');
function authToken(req, res, next) {
  const authHeader = req.body['authorization']
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    jwt.verify(token, 'secretkey', (err, user) => {
      if (err) {
        console.log("err", err)
        return res.sendStatus(500);
      }
      req.user = user;
      next()
    })
  } else {
    res.sendStatus(401);
  }
}
module.exports = { authToken };