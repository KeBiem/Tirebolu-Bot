const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      let jsicon = "https://discord.js.org/static/logo-square.png"

      let bTitle = args[0];
      let bReason = args.slice(1).join(" ")

      let breportEmbed = new Discord.RichEmbed()
      .setTitle("Command")
      .setDescription(bTitle)
      .setColor("#F0C70B")
      .addField("Reported Bug", bReason)
      .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
      .addField("Time", message.createdAt)
      .setTimestamp()
      .setFooter("Tirebolu ©2018", jsicon);

      let breportschannel = message.guild.channels.find(`name`, "bugs");
      if(!breportschannel) return message.channel.send("Could not find bugs channel.");


      message.delete();
      reportschannel.send(breportEmbed);


}

module.exports.help = {
    name: "bug"
}
