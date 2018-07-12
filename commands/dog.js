const superagent = require('superagent');
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    
    const { body } = await superagent
    .get('https://dog.ceo/api/breeds/image/random');
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Woof :dog2:")
    .setImage(body.message);
    return message.channel.send({ embed });
    

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "dog",
    category: "Fun",
    description: "Sends a random image of a dog.",
    usage: "!dog"
};