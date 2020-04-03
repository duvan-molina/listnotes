const { Schema, model} = require('mongoose');

const profileSchema = new Schema({
  profile: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = model('Profile', profileSchema)