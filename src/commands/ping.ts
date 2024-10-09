import {
    Command,
    Declare,
    Options,
    createBooleanOption,
    type CommandContext
  } from 'seyfert';
  import { MessageFlags } from 'seyfert/lib/types';
  
  const options = {
    hide: createBooleanOption({
      description: "Hide command output",
    }),
  }
  
  @Declare({
    name: 'ping',
    description: 'Show the ping with discord'
  })
  @Options(options)
  export default class PingCommand extends Command {
  
    async run(ctx: CommandContext<typeof options>) {
      const flags = ctx.options.hide ? MessageFlags.Ephemeral : undefined;
  
      // average latency between shards
      // in http change this for the example above
      const ping = ctx.client.gateway.latency;
  
      await ctx.write({
        content: `The ping is \`${ping}\``,
        flags,
      });
    }
  
  }