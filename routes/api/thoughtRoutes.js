const router = require('express').Router();

//thought routes
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');



router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).post(updateThought).delete(deleteThought);

router.route('/:thoughtId/reaction').post(createReaction).delete(deleteReaction);

router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);
module.exports = router;