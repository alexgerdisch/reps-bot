const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('check')
		.setDescription('Checks what reps the user owes.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`${interaction.user.username} has to do 0 reps.`);
	},
};