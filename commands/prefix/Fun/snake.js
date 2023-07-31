const { Snake } = require("@nottca/weky");

module.exports = {
    config: {
        name: "snake", // Name of Command
        description: "game snake", // Command Description
        usage: "pap snake" // Command usage
    },
    permissions: ['SendMessages'], // User permissions needed
    owner: false, // Owner only?
    run: async (client, message, args, prefix, config) => {
        // execute
         await Snake({
	message: message,
	embed: {
		title: 'Snake',
		description: 'you scored **{{score}}** points!',
		color: '#3b3935',
        footer: '© Dere Kitsune',
		timestamp: true
	},
	emojis: {
		empty: '⬛',
		snakeBody: '🟩',
		food: '🍎',
		up: '⬆️',
		right: '⬅️',
		down: '⬇️',
		left: '➡️',
	},
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttonText: 'Cancel'
});
	}
}
