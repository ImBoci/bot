const db = require('quick.db');

exports.run = async (client, message, args, tools) => {
    let member = message.mentions.members.first() || message.member;

    let global = await db.fetch(`globalMessages_${member.id}`);
    let guild = await db.fetch(`guildMessages_${member.guild.id}_${member.id}`);

    message.channel.send(`**Global Messages: \`${global}\`\nGuild Messages: \`${guild}\`**`);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

exports.help = {
    name: 'messages',
    description: '_',
    usage: '!messages'
  };