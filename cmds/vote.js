const Discord = require("discord.js");
const agree = "✅";
const disagree = "❎";

module.exports.run = async (bot, message, args) => {

message.delete();

let msg = await message.channel.send("@here Vote!");
await msg.react(agree);
await msg.react(disagree);

const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 300000});
message.channel.send(`@here Voting complete! \n\n${agree}: ${reactions.get(agree).count -1}\n${disagree}: ${reactions.get(disagree).count -1}`);



  }

  module.exports.help = {
    name: "vote"
  }
