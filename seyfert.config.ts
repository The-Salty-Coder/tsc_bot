const { config } = require('seyfert');

export default config.bot({
    token: Bun.env.BOT_TOKEN ?? "",
    intents: ["Guilds"],
    locations: {
        base: "/src",
        output: "src",
        commads: "commands",
        events: "events"
    }
});
