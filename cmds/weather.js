const Discord = require("discord.js");
const weather = require("weather-js");

module.exports.run = async (bot, message, args) => {
  //!weather <city>

  weather.find({search: args.join(" "), degreeType: 'C' }, function(err, result) {

    let jsicon = "https://discord.js.org/static/logo-square.png"

    if (err) message.channel.send(err);

    if(result === undefined || result.length === 0){
      message.channel.send('Please enter a valid location!')
      return;
    }



    var current = result[0].current;
    var location = result[0].location;

    const embed = new Discord.RichEmbed()
      .setDescription(`**${current.skytext}**`)
      .setAuthor(`Weather for ${current.observationpoint}`)
      .setThumbnail(current.imageUrl)
      .setColor("#78F5FF")
      .addField('Timezone', `UTC${location.timezone}`, true)
      .addField('Degree Type',location.degreetype, true)
      .addField('Temperature', `${current.temperature} Degrees`, true)
      .addField('Feels Like', `${current.feelslike} Degrees`, true)
      .addField('Winds',current.winddisplay, true)
      .addField('Humidity', `${current.humidity}%`, true)
      .setTimestamp()
      .setFooter("Tirebolu ©2018", jsicon);

      message.channel.send({embed});
  });

}

module.exports.help = {
  name: "weather"
}
