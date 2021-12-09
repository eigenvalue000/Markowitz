const mongoose = require('mongoose');

const { Schema } = mongoose;


const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  portfolio: {
    type: Array,
    required: true,
    allowNull: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
