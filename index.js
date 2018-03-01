// Import the discord.js module
const Discord = require('discord.js');

const bot = new Discord.Client();
var randnum = 0;
var prefix = ('/'); //Le Préfix

//Prépare le Bot
bot.on('ready', () => {
  bot.user.setPresence({game: { name: 'Think about it', type: 0}})
  console.log('Prêt pour niquer des mères');
});


//Ping
bot.on('message' , message => {
  if (message.content === prefix + 'ping'){
    message.reply('pong');
  }
//OA
  if (message.content === 'oa'){
    message.reply('oa');
  }
//keske
if (message.content === 'keske'){
  message.reply('KESKE');
}
//keskeMAJ
if (message.content === 'KESKE'){
  message.reply('KESKE');
}

//Help
  if (message.content === prefix + 'help'){
      var HelpEmbed = new Discord.RichEmbed()
        .setColor('#E2DEA9')
        .addField("Commandes du Bot :", "\n - /help - Affiche ce menu.\n- /ping - Essaie pour voir.")
        .setFooter("Ceci est un texte plus petit.")
      message.channel.sendEmbed(HelpEmbed);
      //message.channel.sendMessage("Commandes du Bots :\n - /help - Affiche ce menu.\n - /ping - Essaie pour voir.");
  }

});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(3);
      randum = Math.floor(Math.random() * (max - min + 1) + min);

}

bot.login(process.env.BOT_TOKEN);
