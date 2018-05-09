const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

  let jsicon = "https://discord.js.org/static/logo-square.png"
  let bicon = bot.user.displayAvatarURL

  let Bembed = new Discord.RichEmbed()
  .setTitle("Information About Me")
  .setDescription("Hi, my name is Tirebolu. My name comes from a small Township in Giresun, Turkey. This Bot was created for fun. I hope that this bot helps you managing your server beter. 😋")
  .setColor("#328484")
  .addField("Tirebolu", "Version 0.1")
  .addField("Created On", bot.user.createdAt)
  .addField("My Creator", "Kerim")
  .addField("Coded Language", "Javascript & Node.JS")
  .setThumbnail(bicon)
  .setTimestamp()
  .setFooter("Tirebolu ©2018", jsicon);

  message.channel.send(Bembed);
}

module.exports.help = {
  name: "botinfo"
}
