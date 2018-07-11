const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    randomPuppy('memes')
    .then(url => {
        const embed = new Discord.RichEmbed()
        .setTimestamp()
        .setImage(url)
        .setColor('RANDOM')
        message.channel.send({ embed });
    });
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "meme",
    usage: " !meme"
}