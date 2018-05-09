const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let users = bot.users;

let searchTerm = args[0];
if(!searchTerm) return message.channel.send("Please provide a search term!");

let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
let usersinfo = matches.map(u => u.tag);

let Uembed = new Discord.RichEmbed()
.setTitle("Found Users")
.setColor("#FF66CD")
.setDescription(usersinfo);


message.channel.send(Uembed);
}

module.exports.help = {
  name: "findusers"
}
