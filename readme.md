# is-a.dev
The free subdomain registration service!

### Note: this is just the bot repository
register subdomains here: [is-a-dev/register](https://github.com/is-a-dev/register)

# Environment Variables
- `TOKEN`: Bot Token
- `MONGO`: MONGODB Connection String
- `ACTIVITY`: Activity status to set

# Dependencies
1. `discord.js` 
2. `dotenv`
3. `fs`
4. `express`

# Running
1. Install Node and the required dependencies
2. Change the values of `serverId` and `botId` in `index.js`,`guildId` and `clientId` in `src/functions/handleCommands.js` and the role id checks in `src/events/interactionCreate.js`
3. Run `node src/index.js`

## Permission Denied Error on Port 80
Change the port in `src/index.js` if you get this error.
