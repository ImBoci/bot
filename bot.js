const Discord = require('discord.js');
const botSettings = require("./botsettings.json");
const fs = require("fs");
const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone: true});
const Enmap = require('enmap');
bot.commands = new Discord.Collection();
bot.mutes = require("./mutes.json");
bot.aliases = new Enmap();
let coins = require("./coins.json");
let xp = require("./xp.json");
let purple = botSettings.purple;
let cooldown = new Set();
let cdseconds = 5;
const db = require('quick.db');
const talkedRecently = new Set();

const serverStats = {
  guildID: '456063683685253121',
  totalUserID: '461144867372793866',
  memberCountID: '461144937187115008',
  botCountID: '461145013586231297'
};


fs.readdir("./commands/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No commands to load!");
    return;
  }

  console.log(`Loading ${jsfiles.length} commands!`);

  jsfiles.forEach((f, i) => {
      let props = require(`./commands/${f}`);
      console.log(`${i + 1}: ${f} loaded!`);
      bot.commands.set(props.help.name, props);
      if(props.init) props.init(bot);
      props.conf.aliases.forEach(alias => {
        bot.aliases.set(alias, props.help.name);
      });
  });
});


var servers = {};

bot.on("ready", () => {
  console.log('Bot has started')
  bot.user.setActivity(`${bot.guilds.size} servers | !help`, {type: "WATCHING"});

  bot.setInterval(() => {
    for(let i in bot.mutes) {
      let time = bot.mutes[i].time;
      let guildId = bot.mutes[i].guild;
      let guild = bot.guilds.get(guildId);
      let member = guild.members.get(i);
      let mutedRole = guild.roles.find(r => r.name === "Muted");
      if(!mutedRole) continue;

      if(Date.now() > time) {
        console.log(`${i} is now able to be unmuted!`);

        member.removeRole(mutedRole);
        delete bot.mutes[i];

        fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
            if(err) throw err;
            console.log(`I have unmuted ${member.user.tag}.`);
        });
      }
    }
  }, 5000)
});


bot.on("guildMemberAdd", async member =>{
  console.log(`${member.id} joined the server.`);
  if(member.guild.id !== serverStats.guildID) return;

  bot.channels.get(serverStats.totalUserID).setName(`Total Users : ${member.guild.memberCount}`);
  bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
  bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);

  const welcomechannel = member.guild.channels.find('name', 'join-left')
  let newuserjoinembed = new Discord.RichEmbed()
      .setColor('#2EDDEA')
      .setAuthor(member.user.tag + ` (${member.user.id})`, member.user.displayAvatarURL)
      .addField(`User joined`, `Welcome, ${member.user.username} !`)
      .setTimestamp()
      return welcomechannel.send(newuserjoinembed);

  var role = member.guild.roles.find('name', 'Guest');
  member.addRole(role)
});

bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} left the server.`);
  if(member.guild.id !== serverStats.guildID) return;

  bot.channels.get(serverStats.totalUserID).setName(`Total Users : ${member.guild.memberCount}`);
  bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
  bot.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);  

  const goodbyechannel = member.guild.channels.find('name', 'join-left')
  let newuserjoinembed = new Discord.RichEmbed()
      .setColor('#EB3B3B')
      .setAuthor(member.user.tag, member.user.displayAvatarURL)
      .addField(`User left`, "** **")
      .setTimestamp()
      return goodbyechannel.send(newuserjoinembed);
});

bot.on("guildCreate", guild => {
  //  when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers | !help`);
});

bot.on("guildDelete", guild => {
  // when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`Serving ${bot.guilds.size} servers | !help`);
});


bot.on("guildBanAdd", async member => {
  console.log(`${member.id} got ban.`);

  let modlog = bot.channels.find('name', 'mod-log');

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setDescription(`**Action:** Ban\n**Target:** ${member.username}`);
  return bot.channels.get(modlog.id).send({embed});
});





bot.on("channelCreate", async channel => {

  console.log(`${channel.name} has been created.`)

  let sChannel = channel.guild.channels.find(`name`, "log");
  sChannel.send(`${channel} has been created.`);

});

bot.on("channelDelete", async channel => {

  console.log(`${channel.name} has been deleted.`)

  let sChannel = channel.guild.channels.find(`name`, "log");
  sChannel.send(`**${channel.name}** has been deleted.`);

});

bot.on('message', message => {
  const swearWords = [
    "anyád",
    "apád",
    "kurva",
    "cigány"
  ];
  if( swearWords.some(word => message.content.includes(word)) ) {
    if(!message.member.hasPermission("ADMINISTRATOR"))
      message.delete();
      message.author.send(`Hey! That word has been banned, please don\'t use it!`);
    }
})

bot.on('message', async message => {
    //Global:
    db.add(`globalMessages_${message.author.id}`, 1);
    //Guild:
    db.add(`guildMessages_${message.guild.id}_${message.author.id}`, 1);
});

bot.on("message", async message => {

  if(message.author.bot) return;
  if (message.channel.type !== 'text') {
    let active = await db.fetch(`support_${message.author.id}`);
    let guild = bot.guilds.get("456063683685253121");
    let channel, found = true;
    try {
        if (active) bot.channels.get(active.channelID)
            .guild;
    } catch (e) {
        found = false;
    }
    if (!active || !found) {
      //guild.channels.create
        active = {};
        channel = await guild.createChannel(`${message.author.username}-${message.author.discriminator}`, 
        );
        channel.setParent();
        channel.overwritePermissions(guild.roles.find("name", "Guest"), {
          READ_MESSAGES: false,
          SEND_MESSAGES: false
        });
        let author = message.author;
        const newChannel = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(author.tag)
            .setFooter('Support Ticket Created!')
            .addField('User', author)
            .addField('ID', author.id)
        await channel.send({ embed: newChannel });
        const newTicket = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`Hello, ${author.username}`)
            .setFooter('Support Ticket Created!')
        await author.send({ embed: newTicket });
        active.channelID = channel.id;
        active.targetID = author.id;
    }
    channel = bot.channels.get(active.channelID);
    const dm = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`Thank you, ${message.author.username}`)
        .setFooter(`Your message has been sent - A staff member will be in contact soon.`)
    await message.author.send({ embed: dm });
    if (message.content === '!complete') return;
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag)
        .setDescription(message.content)
        .setFooter(`Message Received - ${message.author.tag}`)
    await channel.send(embed);
    db.set(`support_${message.author.id}`, active);
    db.set(`supportChannel_${channel.id}`, message.author.id);
    return;
}
let support = await db.fetch(`supportChannel_${message.channel.id}`);
if (support) {
    support = await db.fetch(`support_${support}`);
    let supportUser = bot.users.get(support.targetID);
    if (!supportUser) return message.channel.delete();
    if (message.content.toLowerCase() === '!complete') {
        const complete = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setAuthor(`Hey, ${supportUser.tag}`)
            .setFooter('Ticket Closed -- Bots')
            .setDescription('*Your ticket has been marked as complete. If you wish to reopen it, or create a new one, please send a message to the bot.*')
        supportUser.send({ embed: complete });
        message.channel.delete();
        db.delete(`support_${support.targetID}`);
        let inEmbed = new Discord.RichEmbed()
            .setTitle('Ticket Closed!')
            .addField('Support User', `${supportUser.tag}`)
            .addField('Closer', message.author.tag)
            .setColor('RANDOM')
        const staffChannel = bot.channels.get('466583538557255686');
        staffChannel.send({ embed: inEmbed });
    }
    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.tag)
        .setFooter(`Message Received`)
        .setDescription(message.content)
    bot.users.get(support.targetID)
        .send({ embed });
    message.delete({
        timeout: 10000
    });
    embed.setFooter(`Message Sent -- ${supportUser.tag}`)
        .setDescription(message.content);
    return message.channel.send(embed);
}

  //if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botSettings.prefix
    };
  }

  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() *15) + 1;
  let baseAmt = Math.floor(Math.random() *15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });

  message.channel.send(`${message.author.username}:\n${coinAmt} coins added!`)
  .then(msg => msg.delete(5000));
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp = curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor(purple)
    .setDescription(`Congrats ${message.author.username}, you have reached a new level!`)
    .addField("New Level: ", curlvl + 1);
    message.channel.send({embed: lvlup})
    .then(message.delete(5000))

    //message.channel.send(`**Level Up!**\nCongrats ${message.author.username}, you have reached a new level!\nLevel: ${curlvl + 1}`).then(msg => {msg.delete(5000)});
  }

  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
  let prefix = prefixes[message.guild.id].prefixes;
  if(!message.content.startsWith(prefix)) return;
  if (cooldown.has(message.author.id)) {
    let cooldownemb = new Discord.RichEmbed()
    .setAuthor(`${message.author.username} Cooldown..`, message.author.displayAvatarURL)
    .setDescription(`You need to wait 5 seconds!`)
    .setColor(`RED`)
    .setFooter(`This message will be deleted in 5 seconds..`)
    return message.channel.send(cooldownemb).then(message => {
     message.delete(5000) 
    })
    
    }
  if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
  }
  
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);


  if(!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run(bot, message, args);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)


});



bot.login(botSettings.token);
