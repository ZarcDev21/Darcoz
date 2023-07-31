const discord = require("discord.js");
const { EmbedBuilder } = require("discord.js");

module.exports = {
    config: {
        name: "kick", // Name of Command
        description: "pokoknya kick orang dari server", // Command Description
        usage: "pap kick @user siapalah pokoknya" // Command usage
    },
    permissions: ['BanMembers'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        // execute
        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);


    if (!target) {
      return message.reply(
        `**${message.author.username}**, Tolong mention orang yang mau di kick`
      );
    }
    if (target.id === message.guild.ownerId) {
      return message.reply("Kau Tidak Bisa Kick Server Owner");
    }
    if (target.id === message.author.id) {
      return message.reply(
        `**${message.author.username}**, Kau tidak bisa kick dirimu sendiri`
      );
    }

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "-";

    const embed = new EmbedBuilder()
      .setTitle("KICK MEMBER")
      .setColor("#2f3136")
      .setThumbnail(target.user.displayAvatarURL())
      .setDescription(
        `Action : Kick \nAlasan: ${reason} \nUser: ${target} \nModerator: ${message.member}`
      )
      .setTimestamp();

    message.channel.send({embeds: [embed]});

    target.kick(args[0]);
    
    },
};