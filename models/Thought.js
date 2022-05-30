const { Schema, model } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      default: true,
    },
    loginDate: {
      type: Date,
      default: Date.now(),
    },
    Friends: {
      type: String,
      required: true,    },
    areFriends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('User', userSchema);

module.exports = User;
