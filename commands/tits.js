module.exports.run = async (bot, message, args) => {
    const emoji = bot.emojis.find("name", "JumpTits")
    message.channel.send(`${emoji}`);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "tits",
    category: "Fun",
    usage: "!tits"
}