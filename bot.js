const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

client.login('NjE3MzAzOTQ0NzQ5Nzc2OTI2.XX19WQ.M2lQ_JdvoM4v-Glw0GKsO19_Elg');