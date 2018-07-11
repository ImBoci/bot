const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    //!coins
    if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins: 0
        };
    }

    let uCoins = coins[message.author.id].coins;

    let coinEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#00FF00")
    .addField(":money_with_wings:", `${uCoins} coins.`);
    
    message.channel.send({embed: coinEmbed})
   //message.channel.send(`${message.author.username}\n 💸 \n${uCoins} coins.`)
   .then(msg => msg.delete(5000));
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "coins"
}