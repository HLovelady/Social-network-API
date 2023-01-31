const { Schema, Types } = require("mongoose");

const userSchema = new Schema(
    //add user models
);


const User = model("user", userSchema);
module.exports = User;