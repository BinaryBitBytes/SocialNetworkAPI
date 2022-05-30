const { Schema, Types } = require('mongoose');

const friendSchema = new Schema(
  {
    friendId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    friendName: {
      type: String,
      required: true,
      maxlength: 32,
      minlength: 3,
      default: 'Friend Name',
    },
    friendTotal: {
      type: Number,
      required: true,
      default: true,
    },
    friendSince: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = friendSchema;
