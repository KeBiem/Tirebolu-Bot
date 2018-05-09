const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (bot, message, args) => {

  let jsicon = "https://discord.js.org/static/logo-square.png"
  let urbanIcon = "https://s3.amazonaws.com/pushbullet-uploads/ujxPklLhvyK-RGDsDKNxGPDh29VWVd5iJOh8hkiBTRyC/urban_dictionary.jpg?w=188&h=188&fit=crop"

  urban.random().first(json => {


  let urbanEmbed = new Discord.RichEmbed()
  .setTitle(json.word)
  .setURL(json.permalink)
  .setDescription(json.definition)
  .setColor("#7EB233")
  .setThumbnail(urbanIcon)
  .addField("Example", json.example)
  .addField("Upvotes", json.thumbs_up, true)
  .addField("Downvotes", json.thumbs_down, true)
  .addField("Written By", json.author)
  .setTimestamp()
  .setFooter("Tirebolu ©2018", jsicon);

 message.channel.send(urbanEmbed);
});
}
module.exports.help = {
  name: "randomurban"
}
