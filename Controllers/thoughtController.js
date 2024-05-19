const Thought = require('../Models/Thought');
const User = require('../Models/User');

const thoughtController = {
    // Get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .then(thoughts => res.json(thoughts))
            .catch(err => res.status(500).json(err));
    },

    // Get a single thought by id
    getThoughtById(req, res) {
        Thought.findById(req.params.id)
            .then(thought => {
                if (!thought) {
                    return res.status(404).json({ message: 'No thought found with this id!' });
                }
                res.json(thought);
            })
            .catch(err => res.status(500).json(err));
    },
