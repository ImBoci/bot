const Discord = require("discord.js");

exports.run = (client, msg, args) => {
    let game = args.join(" ").trim();
    if(!game || game.length < 1) game = null;
    client.user.setPresence({ game: { name: game, type: 0 } });
    msg.delete().catch(console.error);
  };
  
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["game"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'playing',
    category: "Administrator",
    description: 'Changes the "Playing" status (game).',
    usage: '!playing [game name]'
  };