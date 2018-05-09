const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let jsicon = "https://discord.js.org/static/logo-square.png"

    message.delete();

    let bUser = message.mentions.members.first();
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.slice(1).join(" ");
    if(!bReason) return message.reply("Provide a Reason!");
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to ban someone!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can not be banned!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#000000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason)
    .setTimestamp()
    .setFooter("Tirebolu ©2018", jsicon);

    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    await message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);

    try {
    await bUser.send(`You are banned from ${message.guild.name}! \n Reason: ${bReason}`);
  }catch(e) {
      message.channel.send(`<@${message.author.id}> Warning: Could not send this user a DM informing them of their ban. They likely have messages turned off.`);
    }

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


}

module.exports.help = {
  name:"ban"
}
