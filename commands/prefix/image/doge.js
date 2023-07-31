const discord = require("discord.js");

module.exports = {
    config: {
        name: "doge", // Name of Command
        description: "buat foto meme doge", // Command Description
        usage: "pap doge kitsu/Kitsune" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
      //execute
  const splitArgs = args.join(" ").split("/")
        const text1 = splitArgs[0]
        if (!text1) return message.channel.send("Provide proper arguments! Note: Use '/' to split the text")
        const text2 = splitArgs[1]
        if (!text2) return message.channel.send("Provide proper arguments! Note: Use '/' to split the text")
        message.channel.send({ files: [{ attachment: `https://api.memegen.link/images/doge/${text1}/${text2}`, name: "meme.png" }] });
    }
          }