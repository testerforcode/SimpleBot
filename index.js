const Discord = require('discord.js');
const bot =new Discord.Client();

const token = 'BOT TOKEN HERE';


bot.on('ready', () =>{
    console.log('The bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === ".hello"){
       msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === ".info"){
        msg.reply('1.0.1!');

    }
})

bot.on('message', msg=>{
    if(msg.content === ".bday"){
        msg.reply('Happy Birthday my Friend 🥳');

    }
})

bot.on('message', msg=>{
    if(msg.content === ".hi"){
       msg.reply('hi nice to meet you :)');
    }   
})

bot.on('message', msg =>{
    if(msg.content === ".youtube"){
       msg.reply('https://www.youtube.com/channel/UC-gxQ1O2J4TtW8PLHlBv0Ng?view_as=subscriber');
    }
})  

bot.on('message', msg =>{
    if(msg.content === ".yt"){
       msg.reply('https://www.youtube.com/channel/UC-gxQ1O2J4TtW8PLHlBv0Ng?view_as=subscriber');
    }
})

bot.on('message', msg =>{
    if(msg.content === ".8ball"){
       msg.reply('I can see you tomorrow you going to have good day ;)');
    }
})

bot.login(token);