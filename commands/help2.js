const Discord = require("discord.js");
const settings = require('../botsettings.json');

exports.run = async (bot, message, args, tools, con) => {
    let kategoria = args[0];

    if(!args[0]) {
    let help = new Discord.RichEmbed()
        .setTitle(":scroll: List of Commands")
        .setColor("#7FFFD4")
        .setDescription("• Informations\n• Fun\n• Misc\n• Administrator")
        .addField("\u200B",":information_source: Type \`!help <category>\` to get a list of commands in that category. \nExample: \`!help Informations\`");
    message.channel.send({ embed: help })
    } else {
        let command = args[0];
        if (bot.commands.has(command)) {
            command = bot.commands.get(command);
            let commandhelp = new Discord.RichEmbed()
            .setAuthor("Command Help")
            .setColor("#7FFFD4")
            .addField(`\` ${command.help.name} \``, `${command.help.description}\nUsage  ➤${command.help.usage}`);
            message.channel.send({ embed: commandhelp })
            //message.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage::${command.help.usage}`, {code:'asciidoc'});
          }
    } 
    //if(kategoria != 'Informations' && kategoria != 'Category 2' && kategoria != 'Category 3') return message.reply("Usage: !help2 [category]");

    if(kategoria === "Informations") {
    let info = new Discord.RichEmbed()
        .setAuthor("List of Commands")
        .setColor("#7FFFD4")
        .addField("Informations", `${bot.commands.filter(cmd => cmd.help.category === 'Informations').map(cmd => `\`${settings.prefix}${cmd.help.name}\` ➤ ${cmd.help.description}`).join("\n")}`, true)
        .addField('\u200B', ':information_source: Type \`!help <command>\` to get a list of commands in that category. \nExample: \`!help avatar\`');
    message.channel.send({ embed: info });
    } else if(kategoria === "Fun") {
        let info = new Discord.RichEmbed()
            .setAuthor("List of Commands")
            .setColor("#7FFFD4")
            .addField("Fun", `${bot.commands.filter(cmd => cmd.help.category === 'Fun').map(cmd => `\`${settings.prefix}${cmd.help.name}\` ➤ ${cmd.help.description}`).join("\n")}`, true)
            .addField('\u200B', ':information_source: Type \`!help <command>\` to get a list of commands in that category. \nExample: \`!help 8ball\`');
        message.channel.send({ embed: info });
        } else if(kategoria === "Misc") {
            let info = new Discord.RichEmbed()
                .setAuthor("List of Commands")
                .setColor("#7FFFD4")
                .addField("Misc", `${bot.commands.filter(cmd => cmd.help.category === 'Misc').map(cmd => `\`${settings.prefix}${cmd.help.name}\` ➤ ${cmd.help.description}`).join("\n")}`, true)
                .addField('\u200B', ':information_source: Type \`!help <command>\` to get a list of commands in that category. \nExample: \`!help gnome\`');
            message.channel.send({ embed: info });
            }else if(kategoria === "Administrator") {
                let info = new Discord.RichEmbed()
                    .setAuthor("List of Commands")
                    .setColor("#7FFFD4")
                    .addField("Administrator", `${bot.commands.filter(cmd => cmd.help.category === 'Administrator').map(cmd => `\`${settings.prefix}${cmd.help.name}\` ➤ ${cmd.help.description}`).join("\n")}`, true)
                    .addField('\u200B', ':information_source: Type \`!help <command>\` to get a list of commands in that category. \nExample: \`!help gnome\`');
                message.channel.send({ embed: info });
                }
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "help",
    category: "Informations",
    usage: "!help <category>\n!help <command>"
}