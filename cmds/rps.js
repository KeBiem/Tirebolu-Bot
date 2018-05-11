const Discord = require('discord.js');
const rps = ["rock", "paper", "scissors"];
function rand(low, high) {
return Math.random() * (high + 1 - low) + low | 0;
}

module.exports.run = async (bot, message, args) => {
  let rps = args[0].toLowerCase();

  if (rps === "rock" || rps === "paper" || rps === "scissors" ) {
  //if (args[0]) {
    // get user choice && user choice
    let computer_choice = rand(0,2);
    let user_choice = args[0] == "rock" ? 1 : args[0] == "paper" ? 2 : 0;

    // if their choices are same its a draw :D
    if (computer_choice == user_choice) {
      message.reply("Game Drawn!");
    }
    else if (computer_choice < user_choice || computer_choice == 0 && user_choice == 2) {
      message.reply("Tirebolu Won!");
    } else {
      message.reply("You Won!");
    }
  }
}

module.exports.help = {
    name: "rps"
}
