const discord = require("discord.js");

module.exports = {
    config: {
        name: "avatar", // Name of Command
        description: "avatar", // Command Description
        usage: "pap avatar", // Command usage
        aliases: ["av"]
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        // execute
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
    const embed = new discord.EmbedBuilder()
        .setColor("Black")
        .setTitle(`❯ ${client.user.username} - Users ${member.user.tag}`)
        .setDescription(`❯ \`Links:\` **[png](${member.user.displayAvatarURL({format: "png", size: 1024})}) | [jpg](${member.user.displayAvatarURL({format: "jpg", size: 1024})}) | [gif](${member.user.displayAvatarURL({format: "gif", size: 1024, dynamic: true})}) | [webp](${member.user.displayAvatarURL({format: "webp", size: 1024})})**`)
        .setImage(member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setFooter({ text: `Requested by ${message.member.displayName}`, iconURL: message.author.displayAvatarURL({ dynamic: true, size: 1024 }) })
        .setTimestamp()
    return message.channel.send({ embeds: [embed] });
    
    }
}
