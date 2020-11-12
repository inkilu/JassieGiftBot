const Discord = require ('discord.js');
const client = new Discord.Client();
const fs = require('fs');


client.once('ready', () => {

    console.log('Bot Ready!');

});

client.login('');

client.on('message', message => {
    if (message.content === 'mwona') {
        message.reply('hi mwona');
    }
});

const theri = [
    'fuk u mwona',
    'fuck you',
    'fuk u',
    'fuk you',
    'oomb'
];

client.on('message', message => {
    for (let i = 0; i <= theri.length; i++) {
        if (message.content == theri[i]) {
            message.reply('No bed werds mwona');
            break;
        }
    }
});

// Fetching Users avatar

client.on('message', message => {
    if (message.content === 'padam tha') {
        message.reply(message.author.displayAvatarURL());
    }
});

// Joining Voice Channel

let connection;
client.on('message', async message => {
    if (message.content === 'join pls') {
        if (message.member.voice.channel) {
             connection = await message.member.voice.channel.join();
        }
    }
});
/* const dispatcher = connection.play('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3');
dispatcher.on('error', console.error); */