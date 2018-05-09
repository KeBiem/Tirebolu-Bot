const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

  let jsicon = "https://discord.js.org/static/logo-square.png"
  let sicon = message.guild.iconURL;

  let sEmbed = new Discord.RichEmbed()
  .setTitle("Server Information")
  .setThumbnail(sicon)
  .setColor("#EC4758")
  .addField("Server Name", message.guild.name)
  .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
  .addField("Created On", message.guild.createdAt)
  .addField("Total Members", message.guild.memberCount)
  .setTimestamp()
  .setFooter("Tirebolu ©2018", jsicon);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "serverinfo"
}
