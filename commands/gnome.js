const Discord = require("discord.js");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
    let image = "https://media.discordapp.net/attachments/328501331675578370/464145602989522989/tenyekgnome.jpg";

    const embed = new Discord.RichEmbed()
    .setColor("#FF69B4")
    .setTitle("Tények")
    .setDescription("Interjú nemzetünk legismertebb gnome-jával.")
    .setImage(image)

    send(message.channel,  embed, {
        name: 'AndyTV2',
        icon: 'https://yt3.ggpht.com/a-/ACSszfFWOcitlxAfwH5l3RyNDN_lHqghqAT2-RihJQ=s900-mo-c-c0xffffffff-rj-k-no'
    });
}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "gnome",
    category: "Misc",
    usage: "!gnome"
}