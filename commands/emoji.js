module.exports.run = async (bot, message, args) => {
    let emoji = args[0];
    if(emoji === "wben") {
        let wben2 = "https://media.discordapp.net/attachments/456063683685253123/476174451059195914/sssadasda.png"
        message.channel.send(wben2);
    } else if(emoji === "wawe") {
            let wawe = "https://media.discordapp.net/attachments/466009281360035842/476518008886657035/wawe.png"
            message.channel.send(wawe);
    } else if(emoji === "tas") {
            let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476519125511045120/Kep1.png"
            message.channel.send(wawe);
    } else if(emoji === "rekt") {
            let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476519210575593482/rekt.png"
            message.channel.send(wawe);
    } else if(emoji === "predictiongod") {
            let wawe = "https://media.discordapp.net/attachments/466009281360035842/476519310660075535/prediction.png"
            message.channel.send(wawe);
    } else if(emoji === "positivity") {
            let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476520861625614356/Positivity.png"
            message.channel.send(wawe)
    }  else if(emoji === "piton") {
        let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476521411289022464/piton.png"
        message.channel.send(wawe)
    }  else if(emoji === "pite") {
        let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476521474258370579/pite.png"
        message.channel.send(wawe)
    }  else if(emoji === "panda") {
        let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476521524229308437/panda.png"
        message.channel.send(wawe)
    }  else if(emoji === "mikimuki") {
        let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476521573591941120/mikimuki.png"
        message.channel.send(wawe)
    } else if(emoji === "king") {
        let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476525653789769749/king.png" 
        message.channel.send(wawe)
    } else if(emoji === "hype") {
        let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476522494891786253/hype.png"
        message.channel.send(wawe)
    } else if(emoji === "gyereram") {
        let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476522550944464896/gyereram.png"
        message.channel.send(wawe)
    } else if(emoji === "getout") {
        let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476521573591941120/mikimuki.png" //<<<<
        message.channel.send(wawe)
    } else if(emoji === "g2tg") {
        let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476522817970765824/g2tg.png"
        message.channel.send(wawe)
    } else if(emoji === "fbm") {
        let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476522886153371652/212.png"
        message.channel.send(wawe)
    } else if(emoji === "eldobva") {
        let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476522932827455499/eldobva.png"
        message.channel.send(wawe)
    } else if(emoji === "csikicsuki") {
        let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476522998342483988/csikicsuki.png"
        message.channel.send(wawe)
    } else if(emoji === "babyrage") {
        let wawe = "https://cdn.discordapp.com/attachments/466009281360035842/476523042550317077/3.png"
        message.channel.send(wawe)
    }
}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

module.exports.help = {
    name: "emoji",
    category: "Informations",
    usage: "!emoji"
}