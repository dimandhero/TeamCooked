exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

  const msg = await message.channel.send("Ping?");

  msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  console.log('a user used the command Ping');

};
