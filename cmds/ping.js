const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send(`Ping of the bot ${bot.ping}ms.`);
}

module.exports.help = {
  name:"ping"
}
