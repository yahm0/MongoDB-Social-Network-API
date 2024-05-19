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

     // Get a single user by id
     getUserById(req, res) {
        User.findById(req.params.id)
            .populate('thoughts')
            .populate('friends')
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: 'No user found with this id!' });
                }
                res.json(user);
            })
            .catch(err => res.status(500).json(err));
    },


    // Create a new user
    createUser(req, res) {
        User.create(req.body)
            .then(user => res.json(user))
            .catch(err => res.status(400).json(err));
    },

    // Update a user by id
    updateUser(req, res) {
        User.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: 'No user found with this id!' });
                }
                res.json(user);
            })
            .catch(err => res.status(500).json(err));
    },
