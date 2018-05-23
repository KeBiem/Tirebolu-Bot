const Discord = require("discord.js");
const YTDL = require("ytdl-core");
function play(connection, message) {
    const server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection, messsage);
        else connection.disconnect();
    })
}
const servers = {};
module.exports.run = async (bot, message, args) => {
    //play
    if (!args[0]) {
         message.channel.send("Please specify a link");
         return
    }
    
    if(!message.member.voiceChannel) {
        message.channel.sned("I think it may work better if you are in a voice channel!");
    }

    if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
    }
    const server = servers[message.guild.id];

    server.queue.push(args[0]);
    message.channel.send("Your song of choice is on the queue. ")
    if(!message.member.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
    })
}

module.exports.help = {
    name: "play"
}
