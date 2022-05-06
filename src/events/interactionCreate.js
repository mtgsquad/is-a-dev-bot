const {Interaction, Client} = require('discord.js');

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
        reason: 'State your reason!'
      }).then(async()=>await interaction.reply({ephemeral: true, content: 'Thread Created!'}));

    } else if(interaction.customId.includes('archiveThread')) {
        if(interaction.channel.isThread) {
          interaction.reply({ephemeral: true, content: 'Archiving thread...'})
          .then(async() => await interaction.channel.setArchived());
        }
    }

  }



  },
};
