const Discord = require('discord.js'),
      math = require('math-expression-evaluator');

exports.run = (bot, message, args, tools) => {


    // Verify Input
    if (!args[0]) {

        // Configure Embed
        message.channel.send('Please input an expression.');

        // Return & Send Embed
        return message.channel.send(embed);

    }

    // Evaluate Expression
    let result;
    try {

        result = math.eval(args.join(' '));

    } catch (e) { // This will catch any errors in the expression

        result = '***Error: "Invalid Input"***';

    }


    let wEmbed = new Discord.RichEmbed()
    .addField("Input", `${args.join(' ')}`)
    .addField("Output", `${result}`)
    .setColor('RANDOM')
    .setTimestamp()
		.setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`);
    // Configure Embed
    //embed.addField('Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
    //     .addField('Output', `\`\`\`js\n${result}\`\`\``);

    // Send Embed
    message.channel.send(wEmbed);

}

module.exports.help = {
    name: "math"
}
