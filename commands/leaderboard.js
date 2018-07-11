const db = require('quick.db');

module.exports.run = async (client, message, args) => {
    db.startsWith(`guildMessages_${message.guild.id}`, { sort: '.data '}).then(resp => {
        resp.length = 15;

        let finalOutput = '**Leaderboard**\n\n';
        for (var i in resp) {
            finalOutput += `${client.users.get(resp[i].ID.split('_')[2]).username} -- ${resp[i].data} messages\n`;
        }
        message.channel.send(finalOutput)
    });
}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 4
};


module.exports.help = {
    name: "leaderboard"
}