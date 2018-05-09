const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  let target = message.mentions.members.first() || message.member;

  let createdAt = target.user.createdAt
	let joinedAt = target.joinedAt
    let sicon = target.displayAvatarURL;

    let Uembed = new Discord.RichEmbed()
      .setAuthor(target.user.username)
      .setDescription("This is the user's info!")
      .setColor("#80DDFF")
      .setThumbnail(sicon)
      .addField("Full Username", `${target.user.username}#${target.user.discriminator}`)
      .addField("Nickname", target.nickname || "None")
      .addField("ID", target.id)
      .addField("Account Created At", createdAt)
      .addField("You Joined", joinedAt);

      message.channel.send(Uembed);
}

module.exports.help = {
  name: "userinfo"
}
