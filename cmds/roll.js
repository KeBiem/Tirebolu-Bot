const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let cijfer = args[0] || 6;
let number = Math.floor(Math.random() * cijfer) + 1;

message.channel.send(`You rolled ${number}.`);
}

module.exports.help = {
    name: "roll"
}
