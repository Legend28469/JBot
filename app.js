require("dotenv").config();

const urban = require("./modules/urban/urban.js");
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
    query = query.join(" ");

    // After the id is stripped just grab the command
    if (query.includes("urban")) {
      /*
        This one was a pain to write. It kept trying to reply before it even had a definition.
        Was able to fix it by implementing a promise (my first written promise) in the urban.js file
      */

      // Strip the command and keep the query to define
      query = query.split(" ");
      query.shift();
      query = query.join(" ");
      urban.define(query).then(definition => msg.reply(definition));
    }
  }
});

bot.login(process.env.BOTTOKEN);
