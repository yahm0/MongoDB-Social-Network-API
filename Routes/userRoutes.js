const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../Controllers/userController');

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Friends routes
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;