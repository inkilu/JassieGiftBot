const Discord = require('discord.js');
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

let botID = '775692219985952818';
client.on('message', message => {
    if ((message.content.toLowerCase() === 'hi' || message.content.toLowerCase() === 'hello') && (message.member.id !== botID)) {
        message.reply('Hello chellam umma veno??!? 😘😘');
        console.log(message.member.id);
    }
});
let emoji = [
    '😘', '🥰', '💋',
    '👋', '🤚', '🖐',
    '✋', '🖖', '👌',
    '✌️', '🤞', '🤟',
    '🤘', '🤙', '🖕',
    '👍', '👎', '✊',
    '👊', '👏', '🙌',
    '🤝', '🙏', '🤣'

];

// React to every message in every channel with emoji
client.on('message', message => {
    if (message.content) {
        let reaction = emoji[Math.floor(Math.random() * 24)];
        message.react(reaction);
    }
});

// B.E.D Werd Detector

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


// 8-Ball

/* const regEx = /is [/W/d]+ /g; */
const regEx = /is|are|do|will/g;
const ans = [
    'As I see it, yes.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don’t count on it.',
    'It is certain.',
    'It is decidedly so.',
    'Most likely.',
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Outlook good.',
    'Reply hazy, try again.',
    'Signs point to yes.',
    'Very doubtful.',
    'Without a doubt.',
    'Yes.',
    'Yes – definitely.',
    'You may rely on it.'
];
client.on('message', message => {
let match = regEx.test(message.content);
if(match){
    message.reply(ans[Math.floor(Math.random()*ans.length)]);
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



