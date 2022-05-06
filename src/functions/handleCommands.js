const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");

const clientId = "846423539619332126";
const guildId = "830872854677422150";

module.exports = (client) => {
  client.handleCommands = async (commandFolders, path) => {
    commands = [];

    for (folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`${path}/${folder}`)
        .filter((file) => file.endsWith(".js"));
      for (const file of commandFiles) {
        const command = require(`../commands/${folder}/${file}`);
        //console.log(command)
        client.commands.set(command.data.name, command);
        commands.push(command.data);
      }
    }


    

    const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

 (async () => {
                try {
                  console.log('Started refreshing application (/) commands.');
              
                  await rest.put(
                    Routes.applicationGuildCommands(clientId, guildId),
                    { body: commands },
                  );
              
                  console.log('Successfully reloaded application (/) commands.');
                } catch (error) {
                  console.error(error);
                }
              })();
  };
};