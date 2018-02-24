const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const CONST = require('../tools/const').default;
const DB = require('../tools/DB');

const checkToken = expressJwt({ secret: CONST.secret.jwt });


exports.signToken = id => jwt.sign(
  { _id: id },
  CONST.secret.jwt,
  { expiresInMinutes: CONST.jwtExpTime }
);


exports.isLoginParametersExist = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('missing username or password');
  }
  return next();
};


exports.verifyloginInfo = (req, res, next) => {
  const { username, password } = req.body;
  DB.UserModel.findOne({ username }).exec().then((user) => {
    if (!user) {
      return res.status(400).send('user not found');
    } if (user.password !== password) {
      console.log(user);
      return res.status(400).send('wrong password');
    }
    return res.status(200).send(user);
  }, (err) => {
    console.log(err);
    return res.status(400).send('unknown error');
  });
};

