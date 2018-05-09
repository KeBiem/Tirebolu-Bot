const Discord = require("discord.js");
const snek = require("snekfetch");
const api = 'https://random.dog/woof.json';

module.exports.run = async (bot, message, args) => {

let msg = await message.channel.send("Generating ...");

let file = (await snek.get(api)).body.url;
if(!file) return message.channel.send("I broke! Try again.")

await message.channel.send({files: [
  {
    attachment: file,
    name: file.split("/").pop()
  }
]});


msg.delete();

}

module.exports.help = {
  name: "dog"
}
