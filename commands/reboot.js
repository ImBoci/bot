const settings = require("../botsettings.json")

exports.run = async (client, message, args, level) => {
  const token = settings.token;
  if (message.author.id == settings.ownerID)
      message.react('✅')
      .then(message => client.destroy())
      .then(() => client.login(token))
}
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Bot Admin"
  };
  
  exports.help = {
    name: "reboot",
    category: "Administrator",
    description: "Shuts down the bot. If running under PM2, bot will restart automatically.",
    usage: "!reboot"
  };