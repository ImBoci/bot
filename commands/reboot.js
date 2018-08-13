const settings = require ("../botsettings.json");

exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
    if(message.author.id != settings.ownerID) return message.reply("Only the owner can use this command.");
    await message.reply("Bot is shutting down.");
    client.commands.forEach( async cmd => {
      await client.unloadCommand(cmd);
    });
    process.exit(1);
  };
  
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