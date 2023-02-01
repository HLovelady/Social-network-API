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
//available on thoughtController

module.exports = router;