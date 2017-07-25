const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// define the User model schema
const JournalSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
});

module.exports = mongoose.model('Journal', UserSchema);