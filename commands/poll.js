const Discord = require('discord.js');

exports.run = async (bot, message, args, tools) => {
    //if(!message.member.role.find(r => r.name === 'Owner')) return message.channel.send('This requires the role: Owner');
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires the permisson: ADMINISTRATOR');
    if(!args[0]) return message.channel.send('Proper Usage: !poll <question>');

    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setFooter('React to vote.')
        .setDescription(args.join(' '))
        .setTitle(`Poll Created By ${message.author.username}`);

    let msg = await message.channel.send(embed);

    await msg.react('✅');
    await msg.react('❌');

    message.delete({timeout: 1000});
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 4
};

exports.help = {
    name: "poll",
    description: ".",
    usage: "!poll <question>"
};