const {ObjectId} = require("mongoose").Types;
const {User, Thought} = require("../models");

// Aggregate function to get the number of users overall
const totalUsers = async () =>
  User.aggregate([{$count: "numberOfUsers"}])
    .then((numberOfUsers) => numberOfUsers);

module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .select("-__v")
      .populate("thoughts")
      .populate("friends")
      .then(async (users) => {
        const userObj = {
          users,
          headCount: await totalUsers(),
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({_id: ObjectId(req.params.userId)})
      .populate("friends")
      .populate("thoughts")
      .then((user) =>
        !user
          ? res.status(404).json({message: "No user with that ID"})
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a user and remove associated thoughts
  deleteUser(req, res) {
    User.findOneAndRemove({_id: req.params.userId})
      .then((user) =>
        !user
          ? res.status(404).json({message: "No such user exists"})
          : Thought.deleteMany({username: user.username})
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({
              message: "User deleted, but no thoughts found",
            })
          : res.json({message: "User successfully deleted"})
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // find and update User
  updateUser(req, res) {
    User.findOneAndUpdate(
      {_id: ObjectId(req.params.userId)},
      {$set: req.body},
      {runValidators: true, new: true}
    )
      .then((user) =>
        !user
          ? res.status(404).json({message: "No user with this id!"})
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add a friend to a user
  addFriend(req, res) {
    User.findOneAndUpdate(
      {_id: ObjectId(req.params.userId)},
      {$addToSet: {friends: {_id: ObjectId(req.params.friendId)}}},
      {runValidators: true, new: true}
    )
      .then((user) =>
        !user
          ? res.status(404).json({message: "No user found with that ID"})
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove a friend from a user
  removeFriend(req, res) {
    User.findOneAndUpdate(
      {_id: ObjectId(req.params.userId)},
      {$pull: {friends: ObjectId(req.params.friendId)}},
      {runValidators: true, new: true}
    )
      .then((user) =>
        !user
          ? res.status(404).json({message: "No user found with that ID"})
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};