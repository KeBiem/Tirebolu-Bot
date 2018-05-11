const snek = require('snekfetch');
const Discord = require('discord.js');
const api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

module.exports.run = (bot, message, args) => {

    let jsicon = "https://discord.js.org/static/logo-square.png";

    snek.get(api).then(r => {
        let embed = new Discord.RichEmbed()
        .setTitle('Trump quotes generator')
        .setDescription(r.body.message)
        .setColor('#f79036')
        .setTimestamp()
        .setFooter("Tirebolu ©2018", jsicon);

        message.channel.send(embed)
    })
}
module.exports.help = {
    name: "trump"
}
