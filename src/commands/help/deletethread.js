const { SlashCommandBuilder } = require("@discordjs/builders");
const octokit = require('@octokit/request');
const request = require('request');
const fetch = require('node-fetch');
const { get } = require("request");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("deletethread")
    .setDescription("Delete a thread!")
    .addChannelOption(option =>
		option.setName('thread')
			.setDescription('The thread you want to delete')
			.setRequired(true)),
  async execute(interaction) {
        const thread = interaction.options.getChannel("thread");
        if(!thread.isThread()) return interaction.reply(`The provided channel isn't a thread!`);

        thread.send('Closing Thread!').then(async() => {
          thread.delete();
        })
  },
};
