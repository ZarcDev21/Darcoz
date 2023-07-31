const axios = require("axios");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "slap", // Name of Command
        description: "Nabok orang", // Command Description
        usage: "pap slap <user>" // Command usage
    },
    permissions: ["SendMessages"], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!member || (member === message.member)) {
          await message.reply("Lu mau nabok siape")
        } else {
          await axios.get("https://api.otakugifs.xyz/gif?reaction=slap")
            .then(async data => {
              await message.reply({ embeds: [new EmbedBuilder().setColor("#2f3136").setTitle(`${member.user.tag} ditampol ${message.author.tag}`).setImage(data.data.url)] })
            })
            .catch(async fail => {
              await message.reply("Meleset cuy")
            })
        }
    },
};