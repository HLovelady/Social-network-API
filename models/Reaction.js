//not a model but reaction field, in subdocument schema on the thought model
const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    userId: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

//timestamp
reactionSchema.virtual("formattedDate").get(function () {
  const date = this.createdAt;
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
});

module.exports = reactionSchema;
