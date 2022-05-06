const discord = require('discord.js');
module.exports = {
  name: "ready",
  once: true,
  /**
   * 
   * @param {discord.Client} client 
   */
  async execute(client) {
    console.log("Logged in.");
    client.user.setActivity('with Your Mom')
  },
};
