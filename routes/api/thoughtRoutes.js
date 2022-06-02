const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addUser,
  removeUser,
} = require('../../controllers/userController');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

const user = router.route('/').get(getUsers).post(createUser);

const userID = router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/Friends').post(addUser);

router.route('/:userId/friends/:friendId').delete(removeUser);

module.exports = router;
module.exports = user;
module.exports = userID;
