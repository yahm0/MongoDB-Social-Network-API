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


    // Create a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then(thought => {
                return User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } }, { new: true });
            })
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: 'Thought created, but no user found with this id!' });
                }
                res.json({ message: 'Thought created and added to the user!' });
            })
            .catch(err => res.status(500).json(err));
    },


    // Update a thought by id
    updateThought(req, res) {
        Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(thought => {
                if (!thought) {
                    return res.status(404).json({ message: 'No thought found with this id!' });
                }
                res.json(thought);
            })
            .catch(err => res.status(500).json(err));
    },

    // Delete a thought
    deleteThought(req, res) {
        Thought.findByIdAndDelete(req.params.id)
            .then(thought => {
                if (!thought) {
                    return res.status(404).json({ message: 'No thought found with this id!' });
                }
                res.json({ message: 'Thought deleted!' });
            })
            .catch(err => res.status(500).json(err));
    },

    // Add a reaction
    addReaction(req, res) {
        Thought.findByIdAndUpdate(req.params.thoughtId, { $push: { reactions: req.body } }, { new: true })
            .then(thought => {
                if (!thought) {
                    return res.status(404).json({ message: 'No thought found with this id!' });
                }
                res.json(thought);
            })
            .catch(err => res.status(500).json(err));
    },
