const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String
  },
  author: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true /* cada que creamos un dato, fecha de creado */
});

module.exports = model('Note', noteSchema);