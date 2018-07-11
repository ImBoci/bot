const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL
    let bowner = bot.users.get("321355503571697664")
    let binfo = new Discord.RichEmbed()
    .setTitle(`__${bot.user.username}'s Info__`, "Bot Info")
    .setColor("#ffd700")
    .setTimestamp()
    .setThumbnail(bicon)
    .addField("Bot Name:", bot.user.username)
    .addField("Created On:", bot.user.createdAt)
    .addField("Created By:", bowner)
    .addField("Total Guilds:", `**${bot.guilds.size} guilds**`);
    message.channel.send({embed: binfo})
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "botinfo",
    description: "Display some information about the bot.",
    usage: " !botinfo"
}