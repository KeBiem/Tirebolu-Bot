const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!say Hi!
  //Hi
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have manage messages!");
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);

}
  module.exports.help = {
    name: "say"
  }
