// const fs = require('fs');
// let rawdata = fs.readFileSync('./public/resumeHarry.json');
// let data = JSON.parse(rawdata);

module.exports = function (controller) {
  // Gets called when a user uses bot for first time in browser
  controller.on("hello", async (bot, msg) => {
    await bot.beginDialog('typing');
    bot.say('BEEP BOOP WHAT UP BITCH! ASK ME SHIT! HELLOO');
  });

  // Gets called when a user has used bot before in browser
  controller.on("welcome_back", async (bot, msg) => {
    await bot.beginDialog('typing');
    bot.say("I know everything about Calvin, he's a great guy. I can tell you about his background or answer any specific questions");
  });
  
  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'javascript', ['message'], async (bot, message) => {
    let response = resume.basics.name;
    
    await bot.beginDialog('typing');
    await bot.reply(message, response);
  });

}