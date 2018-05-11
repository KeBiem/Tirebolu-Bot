const botconfig = require("./botconfig");
const Discord = require('discord.js');
const fs = require("fs");

const prefix = botconfig.prefix
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 5;

fs.readdir("./cmds/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No commands to load!");
    return;
  }

  console.log(`Loading ${jsfiles.length} commands!`);

  jsfiles.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on('ready', async () => {
  console.log(`Bot is ready! ${bot.user.username}`);
  bot.user.setActivity(`with ${bot.guilds.size} servers | -help`);

  try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
  } catch(e) {
    console.log(e.stack);
  }
});

bot.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return message.channel.send("Error 404!");


//  if(cooldown.has(message.author.id)){
//    message.delete();
//    return message.reply("You have to wait 5 seconds between commands.")
//  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
  //  cooldown.add(message.author.id);
  //}

  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if(!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run(bot, message, args);

//  setTimeout(() => {
//   cooldown.delete(message.author.id)
//}, cdseconds * 1000)

});

bot.on('guildMemberAdd', async member => {
  console.log(`${member} joined the server!`);

  let welcomechannel = member.guild.channels.find(`name`, "join-leave");
  welcomechannel.send(`LOOK OUT EVERYONE! ${member} joined the server!`);

});

bot.on('guildMemberRemove', async member => {
  console.log(`${member} left the server!`);

  let leavechannel = member.guild.channels.find(`name`, "join-leave");
  leavechannel.send(`Sorry to see you leave us **${member.user.username}**!`);
});


bot.login(process.env.BOT_TOKEN);
