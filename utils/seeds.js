const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { userSeeds, thoughtSeeds } = require("./seedsData");


connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("Connected");

  const users = userSeeds;
  const thoughts = thoughtSeeds;


  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.log("\n Seeding Successful! \n");
  process.exit(0);
});