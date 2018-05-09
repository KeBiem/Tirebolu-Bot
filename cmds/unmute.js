const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have manage messages!");

    let toMute = message.mentions.members.first();
    if(!toMute) return message.channel.send("You didn't specify a user!")

    let role = message.guild.roles.find(r => r.name === "SAD Muted");

    if(!role || !toMute.roles.has(role.id)) return message.channel.send("This user is not muted!");

    await toMute.removeRole(role);
    message.channel.send("I have unmuted them!");

    return;
}

module.exports.help = {
  name: "unmute"
}
