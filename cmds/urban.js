const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (bot, message, args) => {

  let jsicon = "https://discord.js.org/static/logo-square.png"
  let urbanIcon = "https://s3.amazonaws.com/pushbullet-uploads/ujxPklLhvyK-RGDsDKNxGPDh29VWVd5iJOh8hkiBTRyC/urban_dictionary.jpg?w=188&h=188&fit=crop"

  if(args.length < 1) return message.channel.send("Please provide a search term!");
  let str = args.join(" ");

  urban(str).first(json => {
    if(!json) return message.channel.send("No results found!")

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
  name: "urban"
}

// let urbanIcon = "https://s3.amazonaws.com/pushbullet-uploads/ujxPklLhvyK-RGDsDKNxGPDh29VWVd5iJOh8hkiBTRyC/urban_dictionary.jpg?w=188&h=188&fit=crop"
// let jsicon = "https://discord.js.org/static/logo-square.png"
//
// //urban <search item>
// if(!args[0]) return message.channel.send("Please specify some text!");
// let res = await urban(args.join(' ')).catch(e => {
//   return message.channel.send("Sorry, that word was not found!");
// });
//
// const embed = new Discord.RichEmbed()
// .setColor("#7EB233")
// .setTitle(res.word)
// .setURL(res.urbanURL)
// .setThumbnail(urbanIcon)
// .addField("Definition", `*${res.definition}*`)
// .addField("Example", `*${res.example}*`)
// .addField("Author", res.author, true)
// .addField("Rating", `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`)
// .setTimestamp()
// .setFooter("Tirebolu ©2018", jsicon);
//
// if (res.tags.length > 0 && res.tags.join(', ').length < 1024) {
// embed.addField('Tags', res.tags.join(', '), true)
// }
//
// message.channel.send(embed);
