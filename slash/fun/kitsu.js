const { ApplicationCommandType } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	name: 'kitsu',
	description: "Check bot's ping.",
	type: ApplicationCommandType.ChatInput,
	cooldown: 3000,
	run: async (client, interaction) => {
		let response = await fetch(`https://darvapi.darcoz.repl.co/v1/fun/papkitsu`);
            let data = await response.text();
            await interaction.reply({ files: [data] });
            console.log(error)
        }
}