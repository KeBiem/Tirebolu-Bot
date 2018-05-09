const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let jsicon = "https://discord.js.org/static/logo-square.png"

    message.delete();

    let kUser = message.mentions.members.first();
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.slice(1).join(" ");
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You do not have permission to kick someone!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can not be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#E37A22")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason)
    .setTimestamp()
    .setFooter("Tirebolu ©2018", jsicon);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    try {
    await kUser.send(`You are kicked from ${message.guild.name}! \nReason: ${kReason}`);
  }catch(e) {
      message.channel.send(`<@${message.author.id}> Warning: Could not send this user a DM informing them of their ban. They likely have messages turned off.`);
    }

    await message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
