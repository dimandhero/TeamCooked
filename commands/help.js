exports.run = (client, message, args) => {
  const Discord = require('discord.js');
  const embed = new Discord.RichEmbed();
  embed.setTitle('Bot Commands');
  embed.setAuthor(' Created By Slewsew');
  embed.addField('`help`: The command you typed', 'Info');
  embed.addField('`kick`: Kicks a member for unwanted behavior', 'Moderation');
  embed.addField('`ping`: Pong!', 'Miscellaneous');
  embed.addField('`reload`: Reloads a command', 'Miscellaneous');
  embed.addField('`stats`: shows intresting stats for the bot', 'Info');
  embed.setColor('#0000ff');
  embed.setDescription("all commands use the prefix '?'");
  message.channel.send(embed)
  console.log('someone needed help');
}
