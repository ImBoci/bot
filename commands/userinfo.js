const Discord = module.require("discord.js");

module.exports.run = async(bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("This is the user's info!")
        .setColor("#20B2AA")
        .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID", message.author.id)
        .addField("Created At", message.author.createdAt);
    
    message.channel.sendEmbed(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "userinfo",
    category: "Informations",
    description: "Display some information about yourself.",
    usage: " !userinfo"
}