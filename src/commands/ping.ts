import { Command, type CommandContext, Declare, Embed } from "seyfert";

@Declare({
    name: "ping",
    description: "Muestra la latencia del bot actual",
})
export default class Ping extends Command {
    async run(ctx: CommandContext) {
        const date = Date.now();
        const embed = new Embed({
            description: `🏓 Latencia del bot: **${ctx.client.gateway.latency}ms**`
        })

        await ctx.editOrReply({ embeds: [embed] });
        const message = await ctx.fetchResponse();
        const ping = message?.createdTimestamp! - date;

        embed.setDescription(`🏓 Latencia del bot: **${ctx.client.gateway.latency}ms**\n🕒 Latencia de los mensajes: **${ping}ms**`);
        await ctx.editOrReply({ embeds: [embed] });
    }
}