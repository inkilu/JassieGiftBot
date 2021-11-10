const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const path = require('path')


client.once('ready', () => {

    console.log('Bot Ready!');

});

client.login('Your token here');

client.on('message', message => {
    if (message.content === 'mwona') {
        message.reply('hi mwona');
    }
});

client.on("ready", () =>{
    client.user.setPresence({
        status: "idle",  //You can show online, idle....
        activity: {
            name: "old school rap",  //The message shown
            type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });

let botID = 'put your bot id here';
client.on('message', message => {
    if ((message.content.toLowerCase() === 'hi' || message.content.toLowerCase() === 'hello') && (message.member.id !== botID)) {
        message.reply('Hello chellam umma veno??!? 😘😘');
        console.log(message.member.id);
    }
});

//reaction spammer

/*let emoji = [
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
}); */

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
const regEx = /is |are |do |will [a-zA-z0-9]/;
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
    try{
    if(match && message.member.id !== botID){
        message.reply(ans[Math.floor(Math.random()*ans.length)]);
    }
}
catch(err){
    console.log("hmm id error");
}
});


// Joining Voice Channel



client.on('message', message => {
   try{ if (message.content === 'paadikko') {
        
        if (!message.member.voice.channelID) {
            message.reply('Onnengil nee voice channelil illa, allel enikk permission illa 😒');
            return;
        }
        message.member.voice.channel.join().then((connection) => {
            connection.play(path.join(__dirname, 'jassie.mp3'));
            message.reply('Pinnalla Polikkam! Type "paadikko" again when im finished to play again!')
          });
    }
    
    }catch(err){
        console.log('perm error');
    }
});
client.on('message', message =>{
    if (message.content ==="mathi pokko"){
        try{
        if (!message.member.voice.channelID) { //remove permission checking!
            message.reply('Onnengil nee voice channelil illa, allel enikk permission illa 😒');
            return;
        }
        else{
    message.member.voice.channel.leave();
    message.reply("Adios");
    }
}
catch(err){
    message.channel.send("No perms!");
}
}
})

