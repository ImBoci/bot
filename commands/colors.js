exports.run = async (bot, message, args) => {
    let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
    if(colors.size < 1) return message.channel.send("There are no colors in this server.");

    message.channel.send(colors.array().join(" "));
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "colors",
    description: ".",
    usage: "!colors"
};