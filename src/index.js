const DiscordJS = require("discord.js");
const Intents = DiscordJS.Intents;
const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});

client.commands = new DiscordJS.Collection();

const functions = fs
  .readdirSync("./src/functions")
  .filter((file) => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");
const eventFiles = fs
  .readdirSync("./src/events")
  .filter((file) => file.endsWith(".js"));

(async () => {
  for (file of functions) {
    require(`./functions/${file}`)(client);
  }
  client.handleEvents(eventFiles, './src/events');
  client.handleCommands(commandFolders, './src/commands');
  client.login(process.env.TOKEN);
})();
