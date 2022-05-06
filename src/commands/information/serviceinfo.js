const { SlashCommandBuilder } = require("@discordjs/builders");
const fetch = require('node-fetch');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("serviceinfo")
    .setDescription("Info about is-a.dev"),
  async execute(interaction, client) {
    fetch(
			`https://discord.com/api/v9/channels/${interaction.channel.id}/messages`,
			{
				method: 'POST',
				body: JSON.stringify({
					content: `**${interaction.member}, Welcome to Is-a.Dev!**\nis-a.dev is a free subdomain service for developers.`,
					components: [
						{
							type: 1,
							components: [
								{
									type: 2,
									label: 'GitHub',
									style: 5,
									url: 'https://github.com/is-a-dev/register/',
								},
                {
									type: 2,
									label: 'Website',
									style: 5,
									url: 'https://is-a.dev',
								},
							],
						},
					],
				}),
				headers: {
					Authorization: `Bot ${client.token}`,
					'Content-Type': 'application/json',
				},
			}
		).then((res) => res.json()).then(async() => {
      await interaction.reply({
        content:
          "*Thanks for using is-a.dev bot!*",
        ephemeral: true,
      });
    });
  },
};
