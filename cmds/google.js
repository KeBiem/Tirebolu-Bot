const Discord = require("discord.js");
const encode = require("strict-uri-encode");

module.exports.run = async (bot, message, args) => {
  //!lmgtfy <search>

  let question = encode(args.join(' '));
  let link = `https://www.lmgtfy.com/?q=${question}`;

  message.channel.send(`**<${link}>**`);

}

module.exports.help = {
  name: "google"
}
