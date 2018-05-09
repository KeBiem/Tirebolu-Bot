const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let jsicon = "https://discord.js.org/static/logo-square.png"

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You do not have administrator!");
let announcemessage = args.join(" ");
message.delete().catch();

let announceEmbed = new Discord.RichEmbed()
.setTitle("Important Announcement")
.setDescription(announcemessage)
.setColor("#EC4758")
.addField("Author", `${message.author.username}#${message.author.discriminator}`)
.setTimestamp()
.setFooter("Tirebolu ©2018", jsicon);

message.channel.send("@everyone");
message.channel.send(announceEmbed);

}
module.exports.help = {
  name: "announce"
}
