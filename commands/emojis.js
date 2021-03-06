module.exports.run = async (client, message, args) => {

    try {

        let emojis;
        if (message.guild.emojis.size === 0) emojis = 'There are no emojis on this server.';
        else emojis = `**Emojis for ${message.guild.name}**\n${message.guild.emojis.map(e => e).join(' ')}`;
        message.channel.send(emojis);

    } catch (err) {

        message.channel.send(`**${err.name}: ${err.message}**`)
    }


}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "emojis",
    category: "Informations",
    usage: "!emojis"
}