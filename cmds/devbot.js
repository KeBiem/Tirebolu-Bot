const Discord = require("discord.js");
function duration(ms) {

       const sec = Math.floor((ms / 1000) % 60).toString();
       const min = Math.floor((ms / (1000 * 60)) % 60).toString();
       const hrs = Math.floor(ms / (1000 * 60 * 60)).toString();

       return `${hrs.padStart(2, '0')}:${min.padStart(2, '0')}:${sec.padStart(2, '0')}`;
   }

module.exports.run = async (bot, message, args) => {

  let jsicon = "https://discord.js.org/static/logo-square.png"
  let bicon = bot.user.displayAvatarURL

let DVembed = new Discord.RichEmbed()
.setTitle("BOT INFO FOR DEV")
.setThumbnail(bicon)
.setColor("#42f474")
.addField("Uptime", duration(bot.uptime))
.addField("Ping", bot.ping)
.addField("Status", bot.status)
.addField("Ready", bot.readyAt)
.setTimestamp()
.setFooter("Tirebolu ©2018", jsicon);

message.channel.send(DVembed);
}

module.exports.help = {
  name:"devbot"
}
