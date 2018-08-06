const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let invitelink = "https://discordapp.com/api/oauth2/authorize?client_id=457295181398671388&permissions=8&scope=bot";

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("You can invite the bot here:")
    .setDescription(invitelink)
    return message.channel.send({ embed });
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "invite",
    category: "Informations",
    usage: "!invite"
};