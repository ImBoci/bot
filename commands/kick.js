const Discord = require('discord.js');
const errors = require("../util/errors.js");

exports.run = (bot, message, args) => {
  if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
  let reason = args.slice(1).join(' ');
  let kUser = message.mentions.users.first();
  let modlog = bot.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the kick.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);

  if(kUser === message.author) return message.reply('You can\'t kick yourself.')
  if (!message.guild.member(kUser).kickable) return message.reply('I cannot kick that member');

  message.mentions.users.map(async user => {
    const member = message.guild.member(user);
    try { await user.send(`**Action:** Kick\n**Kicked by:** ${message.author.tag}\n**Reason:** ${reason}`); }
    catch (err) { console.log('Failed to kick user'); }
    message.guild.member(kUser).kick();
  });

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Kick\n**Target:** ${kUser.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
  return bot.channels.get(modlog.id).send({embed});

  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kick',
  category: "Administrator",
  description: 'Kicks the mentioned user.',
  usage: '!kick [mention] [reason]'
};