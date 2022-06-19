const router = require('express').Router();
//const thoughtRoutes = require('./thoughtRoutes');
//const userRoutes = require('./userRoutes');

const userRoutes = {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addUser,
  removeUser,
} = require('../../controllers/userController');

//router.use('/thoughts', thoughtRoutes);

const user = router.route('/').get(getUsers).post(createUser);

const userID = router.route('/:userId').get(getSingleUser).delete(deleteUser);
router.use('/user', userRoutes);

router.route('/:userId/friends/:friendID').post(addUser);

router.route('/:userId/friends/:friendId').delete(removeUser);
// module.exports = user;
// module.exports = userID;

module.exports = {router, user, userID};