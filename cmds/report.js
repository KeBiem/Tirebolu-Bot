const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.mentions.users.first();
    if(!rUser) return message.channel.send("Couldn't find user.");
    let rreason = args.slice(1).join(" ");

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#ffffff")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

    try {
    await rUser.send(`You are reported by ${message.author}! \nReason: ${rreason}`);
  }catch(e) {
      message.channel.send(`${message.rUser.user.username} Warning: Could not send this user a DM informing them of their report. They likely have messages turned off.`);
    }

    message.delete().catch(O_o=>{});
    await reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
