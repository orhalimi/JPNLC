const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const CONST = require('../tools/const').default;
const DB = require('../tools/DB');
const crypto = require('crypto');

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

const signToken = id => jwt.sign(
  { _id: id },
  CONST.secret.jwt,
  { expiresIn: CONST.jwtExpTime }
);

exports.decipeToken = (req, res, next) => {
  const token = req.get('Authorization');
  if (token) { // TODO CHANGE IT TO PROMISE
    jwt.verify(token, CONST.secret.jwt, (err, decoded) => {
      if (!err) {
        req.token = decoded;
        return next();
      }
      return res.status(401).send('Token is not valid');
    });
  } else {
    return res.status(403).send('No token provided.');
  }
};

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
        return res.status(200).json({ username: user.username, token: signToken(user._id) });// eslint-disable-line no-underscore-dangle
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
      res.status(200).json({ username: createdUser.username, token: signToken(createdUser._id) }); // eslint-disable-line no-underscore-dangle
    })
    .catch((err) => {
      if (err.message === '403') {
        return res.status(403).send('user already exist');
      }
      console.log(err);
      return res.status(400).send('unknown error');
    });
};

exports.getUserByToken = (req, res, next) => {
  DB.UserModel.findOne({ _id: req.token._id }).exec()// eslint-disable-line no-underscore-dangle
    .then((user) => {
      if (!user) {
        throw new Error('401');
      }
      res.status(200).json({ username: user.username });
    })
    .catch((err) => {
      if (err.message === '401') {
        return res.status(401).send('seasion not found');
      }
      return next(err);
    });
};
