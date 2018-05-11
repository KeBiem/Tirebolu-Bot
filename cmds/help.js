const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let jsicon = "https://discord.js.org/static/logo-square.png";

let fhelpEmbed = new Discord.RichEmbed()
.setTitle("**Help:**")
.setDescription("*If a command has `()` in it. That means that is an optional argument.*");


let helpEmbed = new Discord.RichEmbed()
.setTitle("**Fun commands (16)**")
.addField("**-8ball**",'*Ask the great one a question and get an answer back.*')
.addField("**-cat**", '*Generate a picture of a random cat.*')
.addField("**-dog**", '*Generate a picture of a random dog.*')
.addField("**-fortnite <EPIC_NAME> <PLATFORM>**", '*Gets your fortnite stats.* ***(PLATFORM: pc or psn or xb)***')
.addField("**-gif <GIF SEARCH TERM>**", '*Gives a gif with the searched term.*')
.addField("**-google <SEARCH TERM>**", '*Gives a LMGTFY link with the searched term.*')
.addField("**-hastebin <TEXT>**", "*Posting your code on hastebin easy and quick.*")
.addField("**-math <EXPRESSION>", "*Evaluates a math expression.*")
.addField("**-quiz**", "*A fun quiz that updates regularly.*")
.addField("**-randomurban**", '*Returns a random definition from the Urban Dictionary.*')
.addField("**-roll (NUMBER)**", '*Roll a dice from 1 to a number you provide. If no number is provided, rolls from 1 to 6.*')
.addField("**-rps <ROCK | PAPER | SCISSORS>**", '*Play rock/paper/scissors with the bot.*')
//.addField("**-spotify (USER MENTION)**", '*Information about the song that you or the user you mentioned listens to.*')
.addField("**-translate <LANGUAGE> <TEXT>**", '*Translate from English to an other language.*')
.addField("**-trump**", "*Gives random trump quotes.*")
.addField("**-urban <SEARCH TERM>**", '*Searches the Urban Dictionary, then returns the results.*')
.addField("**-weather <CITY>**", '*Get the weather information from a city.*');

let helpsEmbed = new Discord.RichEmbed()
.setTitle("**General Commands (11)**")
.addField("**-avatar (USER MENTION)**", `*Fetches someone's avatar (or your own, if no user was provided).*`)
.addField("**-botinfo**", '*View info about the bot.*')
.addField("**-findusers <SEARCH TERM>**", `*Search all of the bot's cached users for a username/tag.*`)
.addField("**-help**", `*Get messaged info about the bot's commands.*`)
.addField("**-invite**",'*Generates a link to invite Tirebolu to a server.*')
.addField("**-ping**", '*Gives the ping of the bot.*')
.addField("**-say <WORD OR SENTENCE>**", '*Let Tirebolu message your word or sentence.*')
.addField("**-serverinfo**", '*View info about your current server.*')
.addField("**-shorten <URL> (TITLE)**", "*Shorten your links.*")
.addField("**-statistics", '*Get the statistics of Tirebolu.*')
.addField("**-unban <USER ID> <REASON>**", '*Unban a user from a server.* ***(Create a text-channel with the name incident)***')
.addField('**-userinfo (USER MENTION)**', '*View info about a user or yourself.*');


let helptEmbed = new Discord.RichEmbed()
.setTitle("**Administrative Commands (10)**")
.addField("**-addrole <USER MENTION> <ROLE NAME>**", '*Adds the role to the user.*')
.addField("**-announce <WORD OR SENTENCE>**", '*Make an announcement and the bot will tag everyone and make your announcement an embed.*')
.addField("**-ban <USER MENTION> <REASON>**", '*Bans a user off the server and sends them a DM with the reason why.* ***(Create a text-channel with the name incident)***')
.addField("**-clear <MESSAGE COUNT>**", '*Deleted the last n messages.*')
.addField("**-kick <USER MENTION> <REASON>**", '*Bans a user off the server and sends them a DM with the reason why.* ***(Create a text-channel with the name incident)***')
.addField("**-mute <USER MENTION>**", '*Prevents another person from talking in chat.*')
.addField("**-removerole <USER MENTION> <ROLE NAME>**", '*Removes the role from the user.*')
.addField("**-tempmute <USER MENTION> <TIME: S or M or H or D>**", '*Mute a person fora certain amount of time.*')
.addField("**-unmute <USER MENTION>**", '*Allows a previously muted person to talk in chat.*')
.addField("**-vote**", '*A basic vote systems that tells the result after 5 minutes.*')
.setTimestamp()
.setFooter("Tirebolu ©2018", jsicon);


message.author.send(fhelpEmbed);
message.author.send(helpEmbed);
message.author.send(helpsEmbed);
message.author.send(helptEmbed);
}

module.exports.help = {
  name: "help"
}
