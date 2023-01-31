const { Schema, Types } = require("mongoose");

const userSchema = new Schema(
    {
        userId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId(),
        },
        username: {
        },
        email: {
        },
        createdAt: {
        },
        thought: [
        ],
        friends: [
        ],

      },
      {
        toJSON: {
          getters: true,
        },
        id: false,
      }
    );

const User = model("user", userSchema);
module.exports = User;