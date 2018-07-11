const Discord = require("discord.js");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating avatar...");
    let name = message.author.username
    let icon = message.author.AvatarURL

    await message.channel.send({files: [
        {
            attachment: message.author.displayAvatarURL,
            name: "avatar.png"
        }
    ]});

    msg.delete();

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "avatar",
    category: "Information",
    description: "Display your avatar.",
    usage: " !avatar"
}