const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageButton, Interaction, Client, Message } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sendhelp")
    .setDescription("For Mods to send help btn message"),
    /**
     * @param {Interaction} interaction 
     * @param {Client} client 
     */
  async execute(interaction, client) {
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId('makeThread')
        .setStyle('PRIMARY')
        .setLabel('Open a thread'),
    );

    await interaction.reply({content: '**Press the button below to Open a Thread!**', components: [row] });
  },
};
