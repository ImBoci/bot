const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (args.join(" ") == "") {
        let author = message.author;
        let aimage = author.displayAvatarURL;
        let author2 = new Discord.RichEmbed()
            .setAuthor(`${author.username}#${author.discriminator}`) // Set author
            .setColor("#RANDOM") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
            .setImage(aimage) // Set image in embed
        message.channel.send(author2); // Send embed
       //message.reply("you need mention a user for this command! Syntax: !avatar @USER");
        return;
    } else {
        let user = message.mentions.users.first(); // Mentioned user
        let image = user.displayAvatarURL; // Get image URL
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`) // Set author
            .setColor("#RANDOM") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
            .setImage(image) // Set image in embed
        message.channel.send(embed); // Send embed
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "avatar",
    category: "Informations",
    description: "Display your avatar.",
    usage: " !avatar"
}