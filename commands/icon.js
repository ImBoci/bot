module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating icon...");

    if(!message.guild.iconURL) return msg.edit("No icon.");

    await message.channel.send({files: [
        {
            attachment: message.guild.iconURL,
            name: "icon.png"
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
    name: "icon",
    category: "Informations",
    description: "Display server's icon.",
    usage: " !icon"
}