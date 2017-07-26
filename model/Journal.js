const moment = require('moment');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// define the User model schema
const JournalSchema = new Schema({
  user: {
    type: String
  },
  title: {
    type: String
  },
  body: {
    type: String
  },
  location: {
  	type: String
  },
  geoCode: {
    type: String
  },
  Date: {
  	type: String
  }
});

module.exports = mongoose.model('Journal', JournalSchema);