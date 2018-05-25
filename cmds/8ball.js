const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!8ball <question Is ... gay?>
  if(!args[2]) return message.reply("Ask a full question!");
  let replies = ["Yes.", "No.", "Not Probable.", "Probably.", "Maybe"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setColor("#000000")
  .setTitle(question)
  .setDescription(replies[result])
  .setTimestamp()
  .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`);

  message.channel.send(ballembed);
}
  module.exports.help = {
    name: "8ball"
  }
