const { SlashCommandBuilder } = require("@discordjs/builders");
const embeds = require('../../utils/embeds');
const {exec} = require('child_process');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("restart")
    .setDescription("Restart Bot"),
  async execute(interaction) {
    embed.embed(
				'Restarting...',
				'I pulled the latest version of the code from github too!',
				message
		    )
			.then(exec('git pull && pm2 restart index.js'));
  },
};
