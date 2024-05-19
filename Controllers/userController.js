const User = require('../Models/User');
const Thought = require('../Models/Thought');

const userController = {
    // Get all users
    getAllUsers(req, res) {
        User.find({})
            .populate('thoughts')
            .populate('friends')
            .then(users => res.json(users))
            .catch(err => res.status(500).json(err));
    },