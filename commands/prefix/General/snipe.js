const { EmbedBuilder } = require('discord.js');

module.exports = {
    config: {
        name: "snipe", // Name of Command
        description: "show snipe", // Command Description
        usage: "snipe" // Command usage
    },
    permissions: "SendMessages", // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        // execute
        const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.reply("Tidak ada yang bisa di snipe!")
    const embed = new EmbedBuilder()
    .setAuthor({ name: msg.author.tag, iconURL: msg.author.displayAvatarURL({ dynamic: true, size: 1024 }) })
    .setTitle("hayoloh kau kena snipe!")
      if (msg.content) embed
    .setDescription(msg.content)
    if(msg.attachments.first())embed
    .setImage(msg.attachments.first().proxyURL)
    .setColor("#2f3136")
    .setTimestamp();
    
    message.reply({ embeds: [embed] });
   
    
  }
}