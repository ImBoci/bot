const Discord = require("discord.js");
const settings = require('../botsettings.json');
const send = require("quick.hook");

exports.run = async (bot, message, args) => {
    let kérdés = args[0];
    let válasz = args[1];
    let kuldo = message.author.username;

    if(kérdés != "1" && kérdés != "2" && kérdés != "3") {
        const hiba = new Discord.RichEmbed()
        .setAuthor("Gameshow")
        .setTimestamp()
        .setDescription("Ilyen számú kérdés nem létezik!")
        .setColor("RED")
        send(message.channel, hiba, {
            name: "Marci egy buzi!",
            icon: "https://cdn.discordapp.com/attachments/456063683685253123/475823185980555274/IMG_20180721_180918.jpg"
        });
    };

    if(!args[0]) {
        const kérdések = new Discord.RichEmbed()
        .setAuthor("Gameshow")
        .setDescription("Kérdések:\n1. Volt-e holokauszt?\n2. Létezik-e Valhalla?\n3. Hol van Hitler?")
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter("!quiz <kérdés száma>")
        send(message.channel, kérdések, {
            name: 'Marci egy buzi!',
            icon: "https://cdn.discordapp.com/attachments/456063683685253123/475823185980555274/IMG_20180721_180918.jpg"
        });
    } else if(kérdés === "1") {
        const egy = new Discord.RichEmbed()
        .setAuthor("Gameshow")
        .setDescription("1. Volt-e holokauszt?")
        .setTimestamp()
        .setColor("RANDOM")
        let msg = await send(message.channel, egy, {
            name: 'Marci egy buzi!',
            icon: "https://cdn.discordapp.com/attachments/456063683685253123/475823185980555274/IMG_20180721_180918.jpg"
        })
        if(válasz === "a") {
            const egy = new Discord.RichEmbed()
            .setAuthor("Gameshow")
            .setDescription("igen")
            .setTimestamp()
            .setColor("RANDOM")
            send(message.channel, egy, {
            name: `${kuldo} válasza`,
            icon: `${message.author.displayAvatarURL}`
            })

            msg.delete();
        }     
     } else if(kérdés === "2") {
        const egy = new Discord.RichEmbed()
        .setAuthor("Gameshow")
        .setDescription("2. Létezik-e Valhalla?")
        .setTimestamp()
        .setColor("RANDOM")
        send(message.channel, egy, {
            name: 'Marci egy buzi!',
            icon: "https://cdn.discordapp.com/attachments/456063683685253123/475823185980555274/IMG_20180721_180918.jpg"
        })
    } else if(kérdés === "3") {
        const egy = new Discord.RichEmbed()
        .setAuthor("Marci egy buzi! Quiz")
        .setDescription("3. Hol van Hitler?")
        .setTimestamp()
        .setColor("RANDOM")
        send(message.channel, egy, {
            name: 'Marci egy buzi!',
            icon: "https://cdn.discordapp.com/attachments/456063683685253123/475823185980555274/IMG_20180721_180918.jpg"
        })
    } 
}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "quiz",
    category: "Fun",
    description: "",
    usage: "!quiz"
};