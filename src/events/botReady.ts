import { createEvent } from "seyfert";

export default createEvent({
  // botReady executes when all shards and guilds are ready.
  data: { once: true, name: "botReady" },
  run(user, client) {
    client.logger.info(`${user.username} is ready`);
  }
})