const Discord = require("discord.js");
const Fortnite = require("fortnite");
const ft = new Fortnite("439aba3c-fbaa-4ec3-b631-bda58abdd56b");

module.exports.run = async (bot, message, args) => {


  let epicgames = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/266px-Epic_Games_logo.svg.png"
  let jsicon = "https://discord.js.org/static/logo-square.png"


  //!fortnite EVRGONEE pc
  let username = args[0];
  let platform = args[1] || "pc";

  let data = ft.getInfo(username, platform).then(data => {

    console.log(data)

  let stats = data.lifetimeStats;
  let kills = stats.find(s => s.stat == 'kills');
  let wins = stats.find(s => s.stat == 'wins');
  let kd = stats.find(s => s.stat == 'kd');
  let mPlayed = stats.find(s => s.stat == 'matchesPlayed');
  let win = stats.find(s => s.stat == 'win');
  let score = stats.find(s => s.stat == 'score');


  let embed = new Discord.RichEmbed()
  .setTitle("Fortnite Stats")
  .setAuthor(data.username)
  .setThumbnail(epicgames)
  .setColor("#551a8b")
  .addField("Wins", wins.value, true)
  .addField("Win Ratio", win.value, true)
  .addField("Kills", kills.value, true)
  .addField("Matches Played", mPlayed.value, true)
  .addField("KD", kd.value, true)
  .addField("Score", score.value, true)
  .setTimestamp()
  .setFooter("Tirebolu ©2018", jsicon);

    message.channel.send(embed);

    message.delete();

}).catch(e => {
    console.log(e);
    message.channel.send("Couldn't find that username in the database");

  })

}
  module.exports.help = {
    name: "fortnite"
  }
