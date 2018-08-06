const Discord = require('discord.js')
exports.run = (client, message, args, tools) => {


  if(!args[0]) {

  const buyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(`${message.author.username} commit suicide 🔪`)
  .setImage('https://media.giphy.com/media/duyjXZRLcczhm/giphy.gif')
  message.channel.send({embed: buyEmb})
  return;
  }


  if(!message.mentions.members.first().user.username === message.isMentioned(message.author) ) {

  const candyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(`${message.author.username} you killed ${message.mentions.members.first().user.username} 🔪`)
  .setImage('https://media.giphy.com/media/AxVvk1STKwGGGOU0GQ/giphy.gif')
  message.channel.send({embed: candyEmb})
  return;
  }
  const buyEmb = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTitle(`${message.author.username} commit suicide 🔪`)
  .setImage('https://media.giphy.com/media/duyjXZRLcczhm/giphy.gif')
  message.channel.send({embed: buyEmb})

  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kill', 'suicide'],
    permLevel: 0
  };

  exports.help = {
    name: 'kill',
    category: "Fun",
    description: 'suicide or kill someone else.',
    usage: 'kill [name]'
  };