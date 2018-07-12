const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    let test = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Test")
    .setDescription("Test message.")
message.channel.send({ embed: test })

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ld'],
    permLevel: 4
  };

  exports.help = {
    name: 'test',
    category: "Misc",
    usage: "!test"
  };