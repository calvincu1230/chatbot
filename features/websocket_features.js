/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {

        console.log('Loading sample web features...');
        // use main or key categories Ex. resume / skills / projects / experience / interests etc
        controller.hears(new RegExp('skills'), 'message', async (bot, message) => {
            // when quick is input detected, will offer these quick options
            await bot.reply(message,{
                text: 'Here are some of my skills.',
                quick_replies: resume.skills.keywords.map(skill => ({
                    title: skill,
                    payload: skill.toLowerCase(),
                }))
            });
        });


    }

}