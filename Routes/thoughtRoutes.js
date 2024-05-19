const router = require('express').Router();
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought } = require('../Controllers/thoughtController');

router.route('/').get(getAllThoughts).post(createThought);
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// Reactions routes
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;