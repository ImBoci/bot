const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    let sicon = msg.guild.iconURL
    let serverembed = new Discord.RichEmbed()
    .setTitle("Server Information")
    .setColor("#e50b0b")
    .setThumbnail(sicon)
    .addField("Server Name:", msg.guild.name)
    .addField("Created On:", msg.guild.createdAt)
    .addField("You Joined:", msg.member.joinedAt)
    .addField("Total Members", msg.guild.memberCount)
    msg.channel.send({embed: serverembed});
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "serverinfo",
    description: "Display some information about the server.",
    usage: " !serverinfo"
}