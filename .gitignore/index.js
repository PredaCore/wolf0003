const Discord = require("discord.js");
                        
var bot = new Discord.Client();

const PREFIX = "!";

bot.on('ready', function() {
    bot.user.setGame("Race : Humain");
    console.log("le bot a bien ete connecte");
});

bot.on('message', message => {
  if(message.content[0] === PREFIX) {
    if(message.content === '!markdown') {
      message.reply('world !');
    }
  }
});

bot.login('Mzk0NzcwNDk5MjE0OTAxMjU5.DSJL4w.n63qj1h5ZLKceipPdDMdMPQwAZc');
