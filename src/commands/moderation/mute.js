const { SlashCommandBuilder } = require("@discordjs/builders");
const { Interaction } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("mute")
    .setDescription("Mute a user")
    .addUserOption(option =>
		option.setName('usr')
			.setDescription('The user you want to mute')
			.setRequired(true))
    .addStringOption(option =>
        option.setName('time')
            .setDescription('Time you want to mute said user')
            .setRequired(true)),
    /**
     * 
     * @param {Interaction} interaction 
     */
  async execute(interaction) {
    const mutedRole = interaction.guild.roles.cache.find(
        (role) => role.name === 'muted'
       );

    const usr = interaction.options.getUser("usr");
    const time = interaction.options.getString("time");
    usr.roles.add(mutedRole)
    setTimeout(() => {
        target.roles.remove(mutedRole); // remove the role
      }, time);

    await interaction.reply('User Muted!');


  },
};
