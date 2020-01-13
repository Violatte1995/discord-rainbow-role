const 
    Discord = require('discord.js'),
    client = new Discord.Client(),
    util = require('util'),
    config = require('./config.json')

client.on('ready', () => {
  console.log(`Rainbow bot is active`)
setInterval(function(){
 client.guilds.get(config.server).roles.find('name', config.role).edit({color: 'RANDOM'}) 
    },2000);
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Client is work, and his ping **${Math.floor(client.ping)}**ms');
  }
})

client.login(process.env.token)