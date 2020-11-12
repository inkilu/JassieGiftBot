const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');


client.once('ready', () => {

    console.log('Bot Ready!');

});

client.login('Nzc1NjkyMjE5OTg1OTUyODE4.X6qBrA.FP1UBnJnpfMh1GvDHJmVJc-o7eg');

client.on('message', message => {
    if (message.content === 'mwona') {
        message.reply('hi mwona');
    }
});

let botID = '775692219985952818';
client.on('message', message => {
    if ((message.content.toLowerCase() === 'hi' || message.content.toLowerCase() === 'hello') && (message.member.id !== botID)) {
        message.reply('Hello chellam umma veno??!? 😘😘');
        console.log(message.member.id);
    }
});
let emoji = [
    '😘','🥰','💋',
    '👋', '🤚', '🖐',
    '✋', '🖖', '👌',
    '✌️', '🤞', '🤟',
    '🤘', '🤙', '🖕',
    '👍', '👎', '✊',
    '👊', '👏', '🙌',
    '🤝', '🙏','🤣'

];

// React to every message in every channel with emoji
client.on('message', message => {
    if (message.content) {
        let reaction = emoji[Math.floor(Math.random() * 24)];
        message.react(reaction);
    }
});


const bed = [
    'fuk u mwona',
    'fuck you',
    'fuk u',
    'fuk you',
    'oomb'
];

client.on('message', message => {
    for (let i = 0; i <= bed.length; i++) {
        if (message.content == bed[i]) {
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
client.on('message', message => {
    if (message.content === 'join pls') {

        if (!message.member.voice.channelID) {
            message.reply('Voice channelil keru mwonaaa');
            return;
        }
        message.member.voice.channel.join();

    }
});



