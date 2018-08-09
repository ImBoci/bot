const Discord = require('discord.js')
exports.run = (client, message, args) => {
  
  // This code is originally made by RyansHDs#4461. This is only for BEGINNER
  // Thank you for using my code
  // I know i will get alot of hater because of this...
 let m421 = args.join(" ");
  if (!m421) return message.channel.send('Please define a name.')
  if (m421.length > 30) return message.channel.send(`I can't rate your waifu! It's over 30 text!`)
  let result = Math.floor((Math.random() * 100) + 0);
  
    const happyrate = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 ❤`)
  .setColor(`GREEN`)
    
      const sadembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 😭`)
  .setColor(`GREEN`)
      
        const idkembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 🤔`)
  .setColor(`GREEN`)
        
      const shrugembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 🤷`)
  .setColor(`GREEN`)
                
          const okembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 👌`)
  .setColor(`GREEN`)
                        
const thumbupembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 👍`)
  .setColor(`GREEN`)

const eyesembed = new Discord.RichEmbed()
  .setDescription(`I would rate **${m421}** ${result}/100 👀`)
  .setColor(`GREEN`)
  
  if (result > 90) return message.channel.send(happyrate)
  if (result < 30) return message.channel.send(sadembed)
  if (result > 40) return message.channel.send(idkembed)
  if (result > 50) return message.channel.send(shrugembed)
  if (result > 60) return message.channel.send(okembed)
  if (result > 70) return message.channel.send(thumbupembed)
  if (result > 80) return message.channel.send(eyesembed)
}



exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [''],
    permLevel: 0
};

module.exports.help = {
    name: "rate",
    category: "Fun",
    usage: "!rate"
}