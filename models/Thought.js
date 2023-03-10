const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
{

    thoughtText: {
        type: String, 
        required: true,
        minlength: 1, 
        maxlength: 300,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
     // username: {
    //     type: String, 
    //     required: true, 
    // },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("formattedDate").get(function() {
    const date = this.createdAt;
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  });

//virtual to count number of reactions
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
});

const Thought = model('thought', thoughtSchema);
module.exports = Thought;
