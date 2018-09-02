var builder = require('botbuilder');

module.exports = [
    // Destination
    function (session) {
        session.send('Welcome to the IT Support World!');
        builder.Prompts.text(session, 'Please enter your ntid');
		
    },
    function (session, results, next) {
		 
        session.dialogData.ntid = results.response;
		builder.Prompts.text(session, 'Please enter your query ?');
        next();
    },

    //Check-in
    // function (session) {
        // builder.Prompts.time(session, 'When do you want to check in?');
    // },
    // function (session, results, next) {
        // session.dialogData.checkIn = results.response.resolution.start;
        // next();
    // },

   // Nights
    // function (session) {
        // builder.Prompts.number(session, 'How many nights do you want to stay?');
    // },
    function (session, results, next) {
        session.dialogData.query = results.response;
        next();
    },

    // Search...
    function (session) {
        var ntid = session.dialogData.ntid;
        var query = new Date(session.dialogData.query);
        

        session.send('Ok. Creating a support Ticket for you...');

        session.beginDialog('support');
    }
];
