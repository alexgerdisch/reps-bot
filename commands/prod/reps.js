const { SlashCommandBuilder } = require('discord.js');
const { calculateTotalReps, userRepsCompleted } = require('../../entry.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reps')
		.setDescription('User logs their reps'),
	async execute(interaction) {
		console.log(interaction);
		await interaction.reply(`${interaction.user.username} just did some reps.`);
	},
};