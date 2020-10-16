module.exports = function (controller) {
  
  controller.hears(async (message) => message.text && message.text.toLowerCase() === 'javascript', ['message'], async (bot, message) => {
    await bot.reply(message, 'I AM THE BEST AT JAVASCRIPT, ASK HARRY...HE KNOWS!!');
  });

}