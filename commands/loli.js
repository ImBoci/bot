const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let {
        body
    } = await superagent
        .get(`https://nekos.life/api/v2/img/smallboobs`);
    if (!message.channel.nsfw) return message.channel.send("You can use this commands on NSFW Channel!");

    let hentaiEmbed = new Discord.RichEmbed()
        .setTitle(`Requested by: ${message.author.tag}`)
        .setColor("RANDOM")
        .setImage(body.url)
        .setColor("RANDOM")

    message.channel.send(hentaiEmbed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["loli"],
    permLevel: 0
};

exports.help = {
    name: "loli",
    description: "ATUSKA",
    category: "NSFW",
    usage: "!loli"
};