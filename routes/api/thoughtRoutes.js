const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addUser,
  removeUser,
} = require('../../controllers/userController');

const user = router.route('/').get(getUsers).post(createUser);

const userID = router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/Friends').post(addUser);

router.route('/:userId/friends/:friendId').delete(removeUser);

module.exports = router;
module.exports = user;
module.exports = userID;
