const { SlashCommandBuilder } = require("@discordjs/builders");
const octokit = require('@octokit/request');
const request = require('request');
const fetch = require('node-fetch');
const { get } = require("request");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("check")
    .setDescription("Check if the is-a.dev subdomain you want is available.")
    .addStringOption(option =>
		option.setName('domain')
			.setDescription('The domain you want to check')
			.setRequired(true)),
  async execute(interaction) {
        const domain = interaction.options.getString("domain");

        fetch(`https://api.github.com/repos/is-a-dev/register/contents/domains/${domain}.json`, {
            method: 'GET',
            headers: {
                'User-Agent': 'mtgsquad'
            }
        }).then(async(res) => {
            if(res.status && res.status == 404) {
                await interaction.reply(`The subdomain: ${domain}.is-a.dev is available!`);
            } else await interaction.reply(`The subdomain: ${domain}.is-a.dev is unavailable.`)
        })
  },
};
