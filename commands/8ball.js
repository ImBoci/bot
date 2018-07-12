const ballAnswers = require('../8ball.json');
exports.run = function(client, message, args){
  if (!args[0]){
      return message.channel.sendMessage('Please ask me a question!');
  }
  message.channel.sendMessage(ballAnswers[Math.floor(Math.random() * 7) +1]);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  category: "Fun",
  description: 'Ask the magic 8 ball a question!',
  usage: '8ball <question>'
};