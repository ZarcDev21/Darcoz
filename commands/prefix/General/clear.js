const discord = require("discord.js");

module.exports = {
    config: {
        name: "clear", // Name of Command
        description: "pokoknya bersihin chat", // Command Description
        usage: "pap clear channel apa kek pokoknya" // Command usage
    },
    permissions: ['ManageMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        // execute
        const fetched = message.channel || message.mentions.members.first();
    let messageArray = message.content.split(" ");
    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return message.reply(
        `${message.author.username}, kau hanya bisa membersihkan dari 1-99`
      );
    } else if (amount <= 1 || amount > 100) {
      return message.reply(
        `${message.author.username}, kau hanya bisa membersihkan dari 1-99`
      );
    }

    fetched.bulkDelete(amount, true);
    fetched.bulkDelete(amount);
    },
};
