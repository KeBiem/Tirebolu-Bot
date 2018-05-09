const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!clear 15
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have manage messages!");
  if(!args[0]) return message.channel.send("Please try again with a number between 2 to 100.");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}
  module.exports.help = {
    name: "clear"
  }
