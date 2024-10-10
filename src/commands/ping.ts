import { Command, type CommandContext, Declare, Embed } from "seyfert";

@Declare({
    name: "ping",
    description: "Muestra la latencia del bot actual",
})
export default class Ping extends Command {
    async run(ctx: CommandContext) {
        const date = Date.now();
        const embed = new Embed({
            description: `🏓 **${ctx.client.gateway.latency}**`
        })

        await ctx.editOrReply({ embeds: [embed] });
        const message = await ctx.fetchResponse();
        const ping = message?.createdTimestamp! - date;

        embed.setDescription(`🏓 **${ctx.client.gateway.latency}**\n🕒 **${ping}ms**`);
        await ctx.editOrReply({ embeds: [embed] });
    }
}