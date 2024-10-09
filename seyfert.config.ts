const { config } = require('seyfert');

export default config.bot({
    token: Bun.env.BOT_TOKEN ?? "",
    intents: [],
    locations: {
        base: "src",
        output: "src",
    }
});
