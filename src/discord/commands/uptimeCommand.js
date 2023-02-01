const { toFixed } = require("../../contracts/helperFunctions.js");
// eslint-disable-next-line
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "uptime",
  description: "Shows the uptime of the bot.",

  execute: async (interaction, client) => {
    const uptimeEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("🕐 Uptime!")
      .setDescription(`Online since <t:${toFixed(uptime / 1000, 0)}:R>`)
      .setFooter({
        text: `Hosted by ooDVG | /help [command] for more information`,
      });

    interaction.followUp({ embeds: [uptimeEmbed] });
  },
};
