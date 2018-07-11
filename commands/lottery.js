const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const lottery = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Raffle Winner")
        .setDescription(`Competition Winner: ${message.guild.members.random().displayName}`)
    console.log("/draw command " + message.author.username + " Used by.")
    message.delete();
    message.channel.sendEmbed(lottery);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['draw','lottery'],
    permLevel: 0
};

exports.help = {
    name: 'lottery',
    description: 'Make a lottery.',
    usage: '!lottery'
};