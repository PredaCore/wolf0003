const Discord = require("discord.js");
                        
var bot = new Discord.Client();

const PREFIX = "!";

bot.on("ready", function() {
    bot.user.setGame("Race : Humain");
    console.log("le bot a bien ete connecte");
});

bot.on('message', message => {
  if(message.content[0] === PREFIX) {
    if(message.content === '!markdown') {
      message.channel.send(
      `Le **Markdown**,c'est la *vie* ! ***Discord***

~~bonjour~~
__bonjour__
`);
      message.channel.send("``code``");
    }
    else if(message.content === '!richEmbed1') {
      message.channel.send({embed: {
        color: 3447003,
        description: 'bonjour le monde!'
  }
});

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur Wolfayeur ' + member.displayName);
  }).catch(console.error)
});

bot.login("Mzk0NzcwNDk5MjE0OTAxMjU5.DSJKMQ.52YJYJCx7zG5PzIibfBF9gftsuA");
