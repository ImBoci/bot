const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.channel.send('You can use this commands on NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`RANDOM`)
  message.channel.send(lewdembed);
    })
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [''],
    permLevel: 0
};
    
module.exports.help = {
    name: "lewd",
    description: "ATUSKA",
    category: "NSFW",
    usage: "!lewd"
}