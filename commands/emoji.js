module.exports.run = async (bot, message, args) => {
    let emoji = args[0];
    if(emoji === "wben") {
        let wben2 = "https://media.discordapp.net/attachments/456063683685253123/476174451059195914/sssadasda.png"
        message.channel.send(wben2);
    }
}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "emoji",
    category: "Informations",
    usage: "!emoji"
}