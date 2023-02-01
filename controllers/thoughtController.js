//CRUD student activity 26
const { response } = require("express");
const { Thought, User } = require("../models");

module.exports = {
    // GET all thoughts
    getThoughts(req, res) {
    Thought.find()
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },
  

    // GET single thought
    getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No Thought found" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },


    // CREATE new thought
    createThought(req, res) {
    Thought.create({
      thoughtText: req.body.thoughtText,
      username: req.body.username,
    })
      .then((dbThoughtData) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: dbThoughtData._id } },
          { new: true }
        );
      })
          .then((response) => {
        if (!response) {
          res.status(404).json({ message: "ERROR" });
          return;
        }
        res.json(response);
      })
      .catch((err) => res.json(err));
  },

  
    // UPDATE a thought

  
    // DELETE a thought

  
    // ADD a reaction to a thought

  
    // DELETE a reaction from a thought
      deleteReaction(req, res) {
    Thought.findOneAndDelete(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.body.reactionId } } }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No User found" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
  