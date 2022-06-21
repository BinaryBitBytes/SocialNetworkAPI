const router = require('express').Router();

const  {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addThought,
  removeThought,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');
// this is the api call: /api/users
router.route('/').get(getUsers).post(createUser);
// this is the api call: /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
// this is the api call: /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);
// this is the api call: /api/users/:userId/thoughts/:thoughtId
router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;