const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let arg = message.content.split("!embed ").join(" ")

    let specifyembed = new Discord.RichEmbed()
        .setColor(0xF55D5D)
        .setDescription(`${message.author}, Please specify a word or message to embed.`)
        .setTimestamp();

    if (!args[0]) return message.channel.send({embed: specifyembed});

    let embedsay = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`${arg}`);

    message.channel.send({embed: embedsay});
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: "embed",
    category: "Miscelaneous",
    description: "Embed a message you want.",
    usage: "embed"
};