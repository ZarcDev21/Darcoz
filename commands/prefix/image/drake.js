const discord = require("discord.js");

module.exports = {
    config: {
        name: "drake", // Name of Command
        description: "buat foto meme drake", // Command Description
        usage: "pap drake kitsu/Kitsune" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        // execute
        const splitArgs = args.join(" ").split("/")
        const text1 = splitArgs[0]
        if (!text1) return message.channel.send("Provide proper arguments! Note: Use '/' to split the text")
        const text2 = splitArgs[1]
        if (!text2) return message.channel.send("Provide proper arguments! Note: Use '/' to split the text")
        message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/drake?text1=${text1}&text2=${text2}`, name: "reaperdrake.png" }] });
    
    },
};