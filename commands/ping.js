exports.run = (client, message) => {
    message.channel.send('Ping?')
      .then(msg => {
        msg.edit(`Pong! (took: ${msg.createdTimestamp - message.createdTimestamp}ms)`);
      });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'ping',
    category: "Fun",
    description: 'Ping/Pong command.',
    usage: 'ping'
  };