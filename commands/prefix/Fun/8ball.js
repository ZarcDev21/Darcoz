const discord = require("discord.js");

module.exports = {
    config: {
        name: "apakah", // Name of Command
        description: "pokoknya apakah kamu kek yes no", // Command Description
        usage: "pap apakah <msg>" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        // execute
        if (args.length == 0)
      return message.reply("`Usage: pap apakah <msg>`")
        .then((msg) =>setTimeout(() => msg.delete(), 2300));

    var fortunes = [
      "Yes.",
      "sudah pasti.",
      "sudah pasti begitu.",
      "tanpa keraguan ril",
      "Sangat yes",
      "banget",
      "tidak banget",
      "ril cuy",
      "tidak yakin",
      "menurut gw yes.",
      "engga",
      "Tanya lagi nanti.",
      "Mungkin lebih baik aku ga memberitahumu",
      "Tidak bisa diprediksi sekarang.",
      "mungkin aja",
      "ga mungkin",
      "Jawaban gua no.",
      "menurut gua no.",
      "ya",
      "sulit dimengerti",
    ];
    await message.reply(
      fortunes[Math.floor(Math.random() * fortunes.length)]
    );
    
    },
};
