const client = require("../../index");
const colors = require("colors");

module.exports = {
  name: "ready.js"
};

client.once("ready", async client => {
  console.log("\n" + `[READY] ${client.user.tag} is up and ready to go.`.brightGreen);
});