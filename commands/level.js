const Discord = require("discord.js");
const botconfig = require("../botsettings.json");
let purple = botconfig.purple;
let xp = require("../xp.json");

module.exports.run = (bot, message, args) => {

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;

  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(purple)
  .addField("Level", curlvl, true)
  .addField("XP", curxp, true)
  .setFooter(`${difference} XP until level up`, message.author.displayAvatarURL);

  message.channel.send({embed: lvlEmbed})
  .then(msg => msg.delete(10000));
  //message.channel.send(`**${message.author.username}**\n*Level*: ${curlvl}\n*XP*: ${curxp}\n${difference} XP until level up!`).then(msg => {msg.delete(10000)});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['lvl'],
  permLevel: 0
};

module.exports.help = {
  name: "level",
  category: "Fun",
}
