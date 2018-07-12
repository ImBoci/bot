module.exports.run = async (bot, message, args) => {
    const emoji = bot.emojis.find("name", "PepoDance")
    message.channel.send(`${emoji} ${emoji} ${emoji}`);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "pd",
    category: "Fun",
    usage: "!pd"
}