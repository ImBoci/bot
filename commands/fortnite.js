const Discord = require("discord.js");
const config = require("../botsettings.json");
const apikey = require("../keys.json");
const Client = require("fortnite");
const fortnite = new Client(apikey.fortnite);
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {
    //!fortnite Gipo8 solo pc
    //await message.delete();
    let username = args[0];
    let platform = args[2] || "pc";
    let gamemode = args[1];
    if(gamemode != 'solo' && gamemode != 'duo' && gamemode != 'squad' && gamemode != 'lifetime') return message.reply("Usage: !fortnite <username> <mode> <platform>");


    if(!username) return message.reply("Please provide a username!")

    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;

        if(gamemode === 'solo'){
            let solostats = stats.solo;
            let score = solostats.score;
            let kd = solostats.kd;
            let matches = solostats.matches;
            let kills = solostats.kills;
            let wins = solostats.wins;
            let top3 = solostats.top_3;

            let embed = new Discord.RichEmbed()
            .setTitle("Fortnite Tracker Solo Stats")
            .setAuthor(data.username)
            .setColor("#0000FF")
            .addField("Wins", wins, true)
            .addField("Kills", kills, true)
            .addField("Score", score, true)
            .addField("Matches Played", matches, true)
            .addField("Top 3s", top3, true)
            .addField("Kill/Death Ratio", kd, true);

        return send(message.channel,  embed, {
            name: 'Fortnite Stats',
            icon: 'https://res.cloudinary.com/teepublic/image/private/s--s9xwYfdl--/t_Preview/b_rgb:5e366e,c_limit,f_jpg,h_630,q_90,w_630/v1525585848/production/designs/2658865_2.jpg'
        });

        }else if (gamemode === 'duo'){
            let duostats = stats.duo;
            let score = duostats.score;
            let kd = duostats.kd;
            let matches = duostats.matches;
            let kills = duostats.kills;
            let wins = duostats.wins;
            let top3 = duostats.top_3;

            let embed = new Discord.RichEmbed()
            .setTitle("Fortnite Tracker Duo Stats")
            .setAuthor(data.username)
            .setColor("#0000FF")
            .addField("Wins", wins, true)
            .addField("Kills", kills, true)
            .addField("Score", score, true)
            .addField("Matches Played", matches, true)
            .addField("Top 3s", top3, true)
            .addField("Kill/Death Ratio", kd, true);

        return send(message.channel,  embed, {
             name: 'Fortnite Stats',
            icon: 'https://res.cloudinary.com/teepublic/image/private/s--s9xwYfdl--/t_Preview/b_rgb:5e366e,c_limit,f_jpg,h_630,q_90,w_630/v1525585848/production/designs/2658865_2.jpg'
        });
            
        }else if (gamemode === 'squad'){
            let squadstats = stats.squad;
            let score = squadstats.score;
            let kd = squadstats.kd;
            let matches = squadstats.matches;
            let kills = squadstats.kills;
            let wins = squadstats.wins;
            let top3 = squadstats.top_3;

            let embed = new Discord.RichEmbed()
            .setTitle("Fortnite Tracker Squad Stats")
            .setAuthor(data.username)
            .setColor("#0000FF")
            .addField("Wins", wins, true)
            .addField("Kills", kills, true)
            .addField("Score", score, true)
            .addField("Matches Played", matches, true)
            .addField("Top 3s", top3, true)
            .addField("Kill/Death Ratio", kd, true);

        return send(message.channel,  embed, {
            name: 'Fortnite Stats',
            icon: 'https://res.cloudinary.com/teepublic/image/private/s--s9xwYfdl--/t_Preview/b_rgb:5e366e,c_limit,f_jpg,h_630,q_90,w_630/v1525585848/production/designs/2658865_2.jpg'
        });

        }else{

            let lifetime = stats.lifetime;
            let score = lifetime[6] ['Score'];
            let mplayed = lifetime[7] ['Matches Played'];
            let wins = lifetime[8] ['Wins'];
            let winper = lifetime[9] ['Win%'];
            let kills = lifetime[10] ['Kills'];
            let kd = lifetime[11] ['K/d'];

        let embed = new Discord.RichEmbed()
        .setTitle("Fortnite Tracker Lifetime Stats")
        .setAuthor(data.username)
        .setColor("#0000FF")
        .addField("Wins", wins, true)
        .addField("Kills", kills, true)
        .addField("Score", score, true)
        .addField("Matches Played", mplayed, true)
        .addField("Win Percentage", winper, true)
        .addField("Kill/Death Ratio", kd, true);

        return send(message.channel,  embed, {
            name: 'Fortnite Stats',
            icon: 'https://res.cloudinary.com/teepublic/image/private/s--s9xwYfdl--/t_Preview/b_rgb:5e366e,c_limit,f_jpg,h_630,q_90,w_630/v1525585848/production/designs/2658865_2.jpg'
        });
        
        }


    })
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ftn'],
    permLevel: 0
};

module.exports.help = {
    name: "fortnite",
    category: "Fun",
    usage: "!fortnite <name> <mode> <platform>"
}