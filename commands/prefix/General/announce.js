const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js")

module.exports = {
    config: {
        name: "announce", // Name of Command
        description: "annouce", // Command Description
        usage: "pap announce msg" // Command usage
    },
    permissions: ['Administrator'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
      // execute
        const anchannel = message.mentions.channels.first();
    if (!anchannel) {
      return message.channel.send("`Usage: =announce <channel> <msg>`");
    }
    if (!args.slice(1).join(" ")) {
      return message.channel.send(
        "Please add some text to make an Announcement"
      );
    }

    let embed = new Discord.EmbedBuilder()
      .setTitle(`🦊 New Server Announcement`)
      .setDescription(args.slice(1).join(" "), {
        allowedMentions: { parse: ["users"] },
      })
      .setColor("#2f3136")
      .setFooter({ text: `Announcement by ${message.author.username}` })
    anchannel.send({ embeds: [embed] });

    let anembed = new Discord.EmbedBuilder()
      .setTitle("Done!")
      .setDescription(`Announcement has been sent to ${anchannel}`)
      .setColor("#2f3136");

    message.channel.send({ embeds: [anembed] });
    message.delete();
    },
};
