const Discord = require("discord.js");

module.exports = {
    config: {
        name: "meme", // Name of Command
        description: "give meme", // Command Description
        usage: "pap meme, jadi auto kasih meme tapi bahasa Inggris" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        // execute
    message.reply({
      content: 'Untuk sementara waktu, command ini dinonaktifkan karena sedang ada pembaruan program, coba lain kali ya, makasii.'
    });
   },
};
