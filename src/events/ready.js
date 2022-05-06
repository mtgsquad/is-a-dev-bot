const discord = require('discord.js');

const { MessageEmbed } = require('discord.js');
const e = require('../utils/embeds.json');
module.exports = {
  name: "ready",
  once: true,
  /**
   * 
   * @param {discord.Client} client 
   */
  async execute(client) {
    const embed = new MessageEmbed()
		.setTitle("Bot Started")
		.setDescription(`${client.user.tag} is now online!`)
		.setColor(e.color)
		.setTimestamp()
		.setFooter(e.footer);

	return interaction.reply({ embeds: [embed] });



    console.log("Logged in.");
    client.user.setActivity('with Your Mom')
    const botNews = client.channels.cache.find(ch => ch.name === 'bot-news');
    botNews.send({ embeds: [embed] })
  },
};
