const { Schema, model, email } = require('mongoose');
const userSchema = require('./User');

// Schema to create Student model
const runSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      tim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // validate: [isEmail, "invalid email"],
    },
    thoughts: [{type: Schema.Types.ObjectId, ref: "thought"}],
    friends: [{type: Schema.Types.ObjectId, ref: "user"}],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

runSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", runSchema);

module.exports = User;