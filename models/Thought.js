const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
{
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    thoughtText: {
        type: String, 
        required: true,
        minlength: 1, 
        maxlength: 300,
    },
    createdAt: {
        type: Date,
        default: Date,
      },
      username: {
        type: String, 
        required: true, 
    },
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


const Thought = model('thought', thoughtSchema);
module.exports = Thought;

//virtual needed reactionCount