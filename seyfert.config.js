const { GatewayIntentBits } = require('discord-api-types/v10');
const { config } = require('seyfert');

export default config.bot({
    token: Bun.env.BOT_TOKEN,
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
    locations: {
        base: "src",
        output: "src",
        commands: "commands",
        events: "events",
    }
});
