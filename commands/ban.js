const Discord = require('discord.js');
const errors = require("../util/errors.js");

exports.run = (bot, message, args) => {
  if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
  let reason = args.slice(1).join(' ');
  let bUser = message.mentions.users.first();
  let modlog = bot.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the ban.'); 

  if(bUser === message.author) return message.reply('You can\'t ban yourself.')
  if (!message.guild.member(bUser).bannable) return message.reply('I cannot ban that member');

  message.guild.member(bUser).ban(2);
  //message.guild.ban(bUser, 2);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Ban\n**Target:** ${bUser.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
  return bot.channels.get(modlog.id).send({embed});;
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban',
  category: "Administrator",
  description: 'Bans the mentioned user.',
  usage: '!ban [mention] [reason]'
};