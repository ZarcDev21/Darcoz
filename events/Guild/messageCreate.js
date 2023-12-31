
const { EmbedBuilder, PermissionsBitField, codeBlock } = require("discord.js");
const client = require("../../index");
const config = require("../../config/config.js");

module.exports = {
  name: "messageCreate"
};

client.on('messageCreate', async message => {
  const prefix = "pap";

  if (message.channel.type !== 0) return;
  if (message.author.bot) return;
  if (!message.content.toLowerCase().startsWith(prefix)) return;
  if (!message.guild) return;
  if (!message.member) message.member = await message.guild.fetchMember(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length == 0) return;

  let command = client.prefix_commands.get(cmd) || client.prefix_commands.find(c => c.config.aliases && c.config.aliases.includes(cmd));

  if (!command) return await message.reply({
    content: `hm.. command yang kamu cari ga ada nih, coba cek daftar command di \`${prefix}help\``
  })
    .catch(console.error)

  if (command) {
    if (command.permissions) {
      if (!message.member.permissions.has(PermissionsBitField.resolve(command.permissions || []))) return message.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`🚫 Unfortunately, you are not authorized to use this command.`)
            .setColor("Red")
        ]
      })
    };

    if (["365863349084356608", "899191745995239425", " 863512389424381983", "856492301584826398"].includes(message.author.id)) return await message.reply("Maap kau tidak bisa menggunakan bot ini.");

    if (command.owner, command.owner == true) {
      if (!config.Users.OWNERS) return;

      const allowedUsers = []; // New Array.

      config.Users.OWNERS.forEach(user => {
        const fetchedUser = message.guild.members.cache.get(user);
        if (!fetchedUser) return allowedUsers.push('*Unknown User#0000*');
        allowedUsers.push(`${fetchedUser.user.tag}`);
      })

      if (!config.Users.OWNERS.some(ID => message.member.id.includes(ID))) return message.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`🚫 Sorry but only owners can use this command! Allowed users:\n**${allowedUsers.join(", ")}**`)
            .setColor("Red")
        ]
      })
    };

    try {
      command.run(client, message, args, prefix, config);
    } catch (error) {
      console.error(error);
    };
  }
});
