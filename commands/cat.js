const snek = module.require('snekfetch');
const api = "http://aws.random.cat/meow";

exports.run = async (bot, message, args) => {
    
    let msg = await message.channel.send("Generating...");

    let file = (await snek.get(api)).body.file;
    if(!file) return message.channel.send("I broke! Try again.");

    await message.channel.send({ files: [
        {
            attachment: file,
            name: file.split("/").pop()
        }
    ]});
    
    msg.delete();
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "cat",
    category: "Fun",
    description: "Sends a random image of a cat.",
    usage: "!cat"
};