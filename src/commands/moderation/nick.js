const { SlashCommandBuilder } = require("@discordjs/builders");
const octokit = require('@octokit/request');
const request = require('request');
const fetch = require('node-fetch');
const { get } = require("request");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nick")
    .setDescription("Change your nickname")
    .addStringOption(option =>
		option.setName('nickname')
			.setDescription('The nickname you want.')
			.setRequired(true)),
  async execute(interaction) {
        const nick = interaction.options.getString("nickname");
        await interaction.reply({
            content:
              "Nickname Change Request Sent!",
            ephemeral: true,
          }).then(async() => {
              const ch = client.channels.cache.find(channel => channel.id === '972812020690857984');
              await ch.send(`**Nickname:** ${nick}\n**From:** ${interaction.member}`)
          });
  },
};
