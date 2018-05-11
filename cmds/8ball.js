const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let jsicon = "https://discord.js.org/static/logo-square.png"
  //!8ball <question Is ... gay?>
  if(!args[2]) return message.reply("Ask a full question!");
  let replies = ["Yes.", "No.", "Not Probable.", "Probably.", "Maybe"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#000000")
  .addField("Qustion", question)
  .addField("Answer", replies[result])
  .setTimestamp()
  .setFooter("Tirebolu ©2018", jsicon);

  message.channel.send(ballembed);
}
  module.exports.help = {
    name: "8ball"
  }
