const discord = require("discord.js");

module.exports = {
    config: {
        name: "ban", // Name of Command
        description: "pokoknya ban orang", // Command Description
        usage: "pap ban @user siapalah pokoknya" // Command usage
    },
    permissions: ['BanMembers'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        // execute
        let reason = args.slice(1).join(" ");
    if (!reason) reason = "Unspecified";

    const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!target) {
      return message.reply(
        `**${message.author.username}**, Tolong mention orang yang mau di ban.`
      );
    }

    if (target.id === message.author.id) {
      return message.reply(
        `**${message.author.username}**, Kau tidak bisa ban dirimu sendiri!`
      );
    }
    if (target.id === message.guild.ownerId) {
      return message.reply("Kau tidak bisa ban owner server ini!");
    }

    let embed = new discord.EmbedBuilder()
      .setTitle("Action : Ban")
      .setDescription(`Banned ${target} (${target.id})\nAlasan: ${reason}`)
      .setColor("#2f3136")
      .setThumbnail(target.displayAvatarURL())
      .setFooter({ text: `banned by ${message.author.tag}` })
      
    await message.guild.bans.create(target, {
      reason: reason
    }).then(() => {
        message.channel.send({ embeds: [embed] });
      });
    
    },
};