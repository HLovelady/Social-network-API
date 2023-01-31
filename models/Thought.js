const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
// add thought models
);

thoughtSchema.virtual("formattedDate").get(function() {
    const date = this.createdAt;
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  });


const Thought = model('thought', thoughtSchema);
module.exports = Thought;