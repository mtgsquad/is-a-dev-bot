const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton, Interaction, Client, Message } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Send's a help message with detailed issue and close thread button.")
    .addStringOption(option =>
		option.setName('domain')
			.setDescription('The domain you want help with')
			.setRequired(true))
    .addStringOption(option =>
        option.setName('reason')
            .setDescription('The reason why you want help')
            .setRequired(true)),
    /**
     * @param {Interaction} interaction 
     * @param {Client} client 
     */
  async execute(interaction, client) {
    const domain = interaction.options.getString("domain");
    const reason = interaction.options.getString("reason");


    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('archiveThread')
        .setStyle('PRIMARY')
        .setLabel('Archive this thread'),
    );

    await interaction.reply({content: `**Domain:** ${domain}\n**Reason:** ${reason}`, components: [row] });
  },
};
