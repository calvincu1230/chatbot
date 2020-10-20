
const fs = require('fs');

let rawdata = fs.readFileSync('./public/resumeHarry.json');
let data = JSON.parse(rawdata);

// import * as data from '../public/resumeHarry.json';

module.exports = function (controller) {
  
  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'javascript', ['message'], async (bot, message) => {
    let response = data.basics.name;
    await bot.reply(message, response);
  });

}