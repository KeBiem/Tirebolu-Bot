const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have manage messages!");
  let aMember = message.mentions.members.first();
  if(!aMember) return message.reply("You didn't specify a user!");
  let role = args.slice(1).join(" ");
  if(!role) return message.reply("You did not specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Could not find that role!");

  if(aMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(aMember.addRole(gRole.id));

  try{
    await aMember.send(`Congrats, you have been given the role ${gRole.name}.`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`Congrats to <@${aMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "addrole"
}
