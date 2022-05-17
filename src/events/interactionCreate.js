const {Interaction, Client, Message} = require('discord.js');

module.exports = {
  name: "interactionCreate",
  /**
   * 
   * @param {Interaction} interaction 
   * @param {Client} client 
   * @returns 
   */
  async execute(interaction, client) {
    if (interaction.isCommand()) {

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction, client);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content:
          "There was an error executing this command. Please report this to a maintainer.",
        ephemeral: true,
      });
    }
  } else if(interaction.isButton()) {
    if(interaction.customId.includes('makeThread')) {
       const thread = await interaction.channel.threads.create({
        name: `${interaction.member.user.username}`,
        reason: 'Reason will be provided by User',
        startMessage: `Please use the /help command to provide maintainers with the issue you are facing and your subdomain, we will try to respond as fast as possible.\n Thread Opened By: ${interaction.member}\n *${interaction.guild.roles.cache.get('830875873027817484')}*)`
      });

    } else if(interaction.customId.includes('archiveThread')) {
        if(!interaction.member.roles.cache.get('830875873027817484')) {
          interaction.reply({ephemeral: true, content: 'You do not have the permissions to do this!'})
        }

        if(interaction.channel.isThread && interaction.member.roles.cache.get('830875873027817484')) {
          interaction.reply({ephemeral: true, content: 'Archiving thread...'})
          .then(async() => await interaction.channel.setArchived());
        }
    }

  }



  },
};
