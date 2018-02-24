const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const CONST = require('../tools/const').default;
const DB = require('../tools/DB');
const crypto = require('crypto');

const checkToken = expressJwt({ secret: CONST.secret.jwt });

const genSalt = (length = 8) =>
  crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);

const sha256 = (password, salt) => {
  const hash = crypto.createHmac('sha256', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  const passwordHash = hash.digest('hex');
  return passwordHash;
};

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


exports.verifyloginInfo = (req, res) => {
  const { username, password } = req.body;
  DB.UserModel.findOne({ username }).exec()
    .then((user) => {
      if (!user) {
        return res.status(400).send('user not found');
      } if (user.password === sha256(password, user.salt)) {
        return res.status(200).json(user.username);
      }
      return res.status(400).send('wrong password');
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).send('unknown error');
    });
};

exports.createNewUser = (req, res) => {
  const { username, password } = req.body;
  DB.UserModel.findOne({ username }).exec()
    .then((user) => {
      if (user) {
        throw new Error('403');
      }
      const salt = genSalt();
      const hashPassword = sha256(password, salt);
      return DB.UserModel.create({ username, password: hashPassword, salt });
    })
    .then((createdUser) => {
      res.status(200).json(createdUser);
    })
    .catch((err) => {
      if (err.message === '403') {
        return res.status(403).send('user already exist');
      }
      console.log(err);
      return res.status(400).send('unknown error');
    });
};

