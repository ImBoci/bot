module.exports.run = async (bot, message, args) => {
    if(message.author.id != "321355503571697664") {
        message.channel.send(`${message.author} Sorry, wrong  user!`);
    } else {
        message.channel.send(`__**${bot.user.username} is in the following guilds:**__\n\n${bot.guilds.map(g =>`${g.name} - **${g.memberCount} Members**`).join(`\n`)}`, {split: true})
    }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 5
};

module.exports.help = {
    name: "totalservers",
    category: "Informations",
    usage: " !totalservers"
}