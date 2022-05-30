const { Schema, model } = require('mongoose');
const userSchema = require('./User');

// Schema to create Student model
const friendSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    user: [userSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Friend = model('friend', friendSchema);

module.exports = Friend;
