const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "simp", // Name of Command
        description: "Nunjukin seberapa simp kau ke kitsu", // Command Description
        usage: "pap simp" // Command usage
    },
    permissions: "SendMessages", // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        // execute
       let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howgayembed = new EmbedBuilder()
        .setTitle(`**seberapa simp kamu ke kitsune**`)
        .setDescription(`${member.username} is ` + rng + "% simp")
        .setColor("#808080")

        message.channel.send({ embeds: [howgayembed] });
    }
}
