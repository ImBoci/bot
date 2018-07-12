const send = require("quick.hook");
const Discord = require('discord.js');

exports.run = (client, message, args) => {

       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You need the ADMINISTRATOR permission to run this comamnd!")
		   //const color = args[0]
		   //let title = args[0];
		   const text = args.slice(0).join(" ");
		   const author = message.author;
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor(message.guild.me.displayHexColor)
		   .setThumbnail(message.guild.iconURL)
		   .setDescription("**Announced by: " + message.author + "**\n\n" + text + "\n")
		   .setFooter("An announcment made at ")
		   .setTimestamp()
      send(message.channel, embed, {
        name: 'Announcment',
        icon: message.guild.iconURL
    });
	   
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 4
};

module.exports.help = {
	name: "announcement",
	category: "Administrator",
	usage: "!announcement <message>"
}