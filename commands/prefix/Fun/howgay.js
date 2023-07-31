const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "howgay", // Name of Command
        description: "Nunjukin seberapa gay lu", // Command Description
        usage: "pap howgay" // Command usage
    },
    permissions: "SendMessages", // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        // execute
        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);

        const howgayembed = new EmbedBuilder()
        .setTitle(`**gay machine**`)
        .setDescription(`${member.username} is ` + rng + "% Gay🌈")
        .setColor("#2f3136")

        message.channel.send({ embeds: [howgayembed] });
    },
};
