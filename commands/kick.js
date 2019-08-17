exports.run = (client, message, [mention, ...reason]) => {
  const adminRole = message.guild.roles.find(role => role.name === "Administration");
  if (!adminRole)
    return console.log("The admin role does not exist");

  if (!message.member.roles.has(adminRole.id))
    return message.reply("You can't use this command.");

  if (message.mentions.members.size === 0)
    return message.reply("Please mention a user to kick");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("User can not be kicked");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.reply(`${member.user.username} was succesfully kicked.`);
    console.log(`${member.user.username} has been kicked out of the server`);
  });
};
