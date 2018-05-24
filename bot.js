const Discord = require('discord.js');
const client = new Discord.Client();

client.on('!ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply('over9000');
  	}
});

client.on('message', message => {
    if (message.content === '!play') {
    	message.reply('Jeigu radijas nėra "Radijas" kanale, tai radijas išjungtas. Prašome užeiti kitą kartą. Linkiu jums geros dienos!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
