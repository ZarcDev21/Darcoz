const discord = require("discord.js");

module.exports = {
    config: {
        name: "siapa", // Name of Command
        description: "Cari tau siapa yang anu", // Command Description
        usage: "pap siapa <msg>" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        // execute
        if (args.length == 0)
      return message.reply(`Siapa yang apa bang?`);

    var fortunes = [
      "wah, si {user} tuh",
      "fix {user}",
      "{user} cuy"
    ];
      const random = message.guild.members.cache.filter(m => !m.user.bot).random().user;
    await message.reply({ content: `${fortunes[Math.floor(Math.random() * fortunes.length)].replaceAll("{user}", random.tag)}` });
    
    },
};
