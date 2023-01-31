const { Schema, Types } = require("mongoose");

const userSchema = new Schema(
    {
        userId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId(),
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
        },
        createdAt: {
            type: Date,
            default: Date.now,
          },
          thought: [
            {
              type: Schema.Types.ObjectId,
              ref: "Thought",
            },
          ],
          friends: [
            {
              type: Schema.Types.ObjectId,
              ref: "User",
            },
          ],
      },
      {
        toJSON: {
          getters: true,
        },
        id: false,
      }
    );

//virtual needed

const User = model("user", userSchema);
module.exports = User;