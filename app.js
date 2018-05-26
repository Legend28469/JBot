require("dotenv").config();

const urban = require("./modules/urban/urban");
const oracle = require("./modules/oracle/oracle");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", msg => {
  msg.content = msg.content.toLowerCase();

  if (msg.content.split(" ")[0] === process.env.BOTID) {
    // Make sure user actually wants to use the bot
    let query = msg.content.split(" ");
    query.shift();

    // Better to keep the command and the query after it separate
    const command = query.shift();
    query = query.join(" ");

    // After the id is stripped just grab the command
    if (command === "urban") {
      /*
        This one was a pain to write. It kept trying to reply before it even had a definition.
        Was able to fix it by implementing a promise (my first written promise) in the urban.js file
      */
      urban.define(query).then(definition => msg.reply(definition));
    } else if (command === "oracle") {
      msg.reply(oracle.foresight());
    }
  }
});

bot.login(process.env.BOTTOKEN);
