'use strict';
const builder = require('botbuilder');
var httpRequest = require("request");
const connector = new builder.ChatConnector({
    //appId: process.env.MICROSOFT_APP_ID,
    //appPassword: process.env.MICROSOFT_APP_PASSWORD
});


var inMemoryStorage = new builder.MemoryBotStorage();

const bot = module.exports = new builder.UniversalBot(connector, [
    // this section becomes the root dialog
    // If a conversation hasn't been started, and the message
    // sent by the user doesn't match a pattern, the
    // conversation will start here
    (session, args, next) => {
         // Launch the query helpDesk using beginDialog
         session.beginDialog('helpDesk');
    }
]).set('storage', inMemoryStorage); // Register in memory storage

bot.dialog('helpDesk', require('../lib/dialogs/query.js'));
bot.dialog('support', require('../lib/dialogs/support.js'))
    .triggerAction({
        matches: [/help/i, /support/i, /problem/i]
    });

// log any bot errors into the console
bot.on('error', function (e) {
    console.log('And error ocurred', e);
});
