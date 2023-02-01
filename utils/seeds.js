const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");
const { userSeeds, thoughtSeeds, reactionSeeds } = require("./data");


connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("Connected");

  const users = userSeeds;
  const thoughts = thoughtSeeds;
  const reactions = reactionSeeds;


  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.log("\n Seeding Successful! \n");
  process.exit(0);
});