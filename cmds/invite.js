const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let invlink = "https://discordapp.com/oauth2/authorize?client_id=442666351190999040&permissions=8&scope=bot"
  let jsicon = "https://discord.js.org/static/logo-square.png"
  let bicon = bot.user.displayAvatarURL

  let iEmbed = new Discord.RichEmbed()
  .setTitle("Invite Tirebolu to your server!")
  .setDescription(invlink)
  .setThumbnail(bicon)
  .setColor("#00E6DC")
  .addField("Tirebolu", "Version 0.1")
  .setTimestamp()
  .setFooter("Tirebolu ©2018", jsicon);

  message.author.send(iEmbed);
  message.channel.send(`:mailbox_with_mail: <@${message.author.id}>`);

}

module.exports.help = {
  name: "invite"
}
