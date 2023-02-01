const router = require('express').Router();

//user routes
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');
above are on userController.js


router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).post(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);


module.exports = router;