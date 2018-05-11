const Discord = require("discord.js");
const gifSearch = require("gif-search");

module.exports.run = async (bot, message, args) => {

  if (message.author.bot) return;

    if (!args[0]) return message.channel.send("-gif <gname>`");

    gifSearch.random(args[0]).then(
        gifUrl => {

        let randomcolor = ((1 << 24) * Math.random() | 0).toString(16); //Optional
        var embed = new Discord.RichEmbed()
            .setColor(`#${randomcolor}`)
            .setImage(gifUrl);
        message.channel.send(embed);
     });
}
module.exports.help = {
    name: "gif"
}
