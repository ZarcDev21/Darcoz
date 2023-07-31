const Discord = require("discord.js");

module.exports = {
    config: {
        name: "choose", // Name of Command
        description: "bantu kamu menentukan pilihan", // Command Description
        usage: "choose <pilihan-pertama> | <pilihan-kedua>" // Command usage
    },
    permissions: "SendMessages", // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
    const pilihan = message.content.slice((prefix + " choose").length).trim().replace(" |", "|").replace("| ", "|");
    const pilihanPertama = pilihan.split("|")[0];
    const pilihanKedua = pilihan.split("|")[1];
    if (!pilihanPertama || !pilihanKedua) return await message.reply("Kamu melupakan salah satu pilihan")
    const hasil = [pilihanPertama, pilihanKedua][Math.floor(Math.random() * 2)];
    await message.channel.send(`🦊 ${message.member.user.username}, Pilihan ku : **${hasil}**`)
  }
};