/**
 * This module demonstrates the use of the typing indicator in a conversation, and when using bot.reply
 * Tell your bot "typing dialog" or "typing reply" to see this in action.
 */
const { BotkitConversation } = require("botkit");

module.exports = function(controller) {

    let typing = new BotkitConversation('typing', controller);

    // typing.say('I am going to type for a while now...');
    typing.addAction('typing');

    // start the typing indicator
    typing.addMessage({type: 'typing'}, 'typing');
    // trigger a gotoThread, which gives us an opportunity to delay the next message
    typing.addAction('add_delay','typing');

    // Added empty object to avoid 
    typing.addMessage({},'add_delay');

    // use the before handler to delay the next message 
    typing.before('add_delay',  async () => {
        return new Promise((resolve) => {
            // simulate some long running process
            setTimeout(resolve, 1500);
        });
    });

    controller.addDialog(typing);

    // controller.hears('typing dialog', 'message', async (bot, message) => {
    //     await bot.beginDialog('typing');
    // });

    // controller.hears('typing reply', 'message', async (bot, message) => {

    //     await bot.reply(message, {type: 'typing'});
    //     setTimeout(async () => {
    //         // will have to reset context because turn has now ended.
    //         await bot.changeContext(message.reference);
    //         await bot.reply(message, 'Typed!');
    //     }, 1000);
    // });
};