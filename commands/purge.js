const Discord = require("discord.js");
const send = require('quick.hook');

module.exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have permission to do this.");

    const messagecount = parseInt(args.join(' '));
    if(!messagecount) return message.channel.send("Enter a value!")
    message.channel.fetchMessages({
      limit: messagecount
    }).then(messages => message.channel.bulkDelete(messages) );

    let embed = new Discord.RichEmbed()
    .setTitle("Trash")
    .setColor("RANDOM")
    .setDescription(`Deleted ${messagecount} messages.`)
    send(message.channel, embed, {
      name: 'Trash',
      icon: 'https://cdn.discordapp.com/attachments/459829609203236874/466021242986692608/trash.png'
    });
    //message.channel.send(`Deleted: ${messagecount} messages.`)
  };

  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['clear'],
    permLevel: 4
};

module.exports.help = {
    name: "purge",
    description: 'Purges X amount of messages from a given channel.',
    usage: ' !purge <number>'
}

