const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Define the member of a guild.
    const member = message.guild.member(user);

	//Discord rich embed
    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL || user.defaultAvatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("ID:", `${user.id}`, true)
		.addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("Created At:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
		.addField("Joined Server:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
		.addField("Bot:", `${user.bot}`, true)
    .addField("Last Message", `${user.lastMessage !== null ? `${user.lastMessage}` : "None"}`, true)
		.addField("Status:", `${user.presence.status}`, true)
		.addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
    .setTimestamp()
		.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`);

     message.channel.send(embed);
    }


module.exports.help = {
  name: "userinfo"
}
