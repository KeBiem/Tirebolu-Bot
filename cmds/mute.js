const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have manage messages!");

    let toMute = message.mentions.members.first();
    if(!toMute) return message.channel.send("You didn't specify a user!")

    if(toMute.id === message.author.id) return message.channel.send("You cannot mute yourself!");
    if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("You cannot mute a member who is higher or has the same role as you!");

    let role = message.guild.roles.find(r => r.name === "SAD Muted");
    if(!role){
    try{
      role = await message.guild.createRole({
        name: "SAD Muted",
        color: "#2C3E50",
        permissions: []
      });

      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(role, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e) {
      console.log(e.stack);
    }
  }
    if(toMute.roles.has(role.id)) return message.channel.send("This user is already muted!");

    await toMute.addRole(role);
    message.channel.send("I have muted them!");

    return;
}

module.exports.help = {
  name: "mute"
}
