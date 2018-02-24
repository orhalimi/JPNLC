
import CONST from './const';

const mongoose = require('mongoose');

module.exports.mongoConnect = (path = CONST.DBPath, DB = CONST.DB) => {
  mongoose.connect(`${path}/${DB}`);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'DB connection Error : '));
  db.once('open', () => {
    console.log('DB connection ok!');
  });
};


const WordSchema = new mongoose.Schema({
  word: {
    kanji: {
      type: String,
      unique: true,
      required: true,
    },
    hiragana: {
      type: String,
      required: true,
    },
  },
  type: {
    type: String,
    required: true,
  },
  translate: {
    type: String,
    required: true,
  },
  missing: String,
  exeptions: String,
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
});


module.exports.WordModel = mongoose.model('words', WordSchema);
module.exports.UserModel = mongoose.model('users', UserSchema);
