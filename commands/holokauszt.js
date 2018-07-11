const Discord = require("discord.js");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
    let image = "http://static.origos.hu/s/img/i/1601/20160121a-nacik-jelkepe.jpg?w=310&h=307";

    const embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Holokauszt")
    .setDescription("Nem volt, lesz!")
    .setImage(image)

    send(message.channel,  embed, {
        name: 'Adolf Hitler',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler_%28cropped%29.jpg/230px-Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler_%28cropped%29.jpg'
    });
}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "holokauszt"
}