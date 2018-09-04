module.exports = function (session) {
    // Generate ticket
    var tickerNumber = Math.ceil(Math.random() * 20000);
	//var incidentNum = callServiceNow(session); // 
    // Reply and return to parent dialog
    session.send('Your message \'%s\' was registered. Once we resolve it; we will get back to you.', session.message.text);
    
    session.send('Thanks for contacting our support team. Your ticket number is %s.', tickerNumber);

    session.endDialogWithResult({
        response: tickerNumber
    });
};

//external application call begin 
function  callServiceNow(session){
	const name = session.privateConversationData.name;
	const age = session.privateConversationData.age;
	console.log("Name >> "+name +" Age >>"+age);
	
	httpRequest.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:3333/movies-app/products",
    "body": JSON.stringify({        
	"id":"13",
	"prodName":name,
	"prodDesc":"Test desc",
	"prodPrice":age,
	"prodImage":"test"
    })
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));
});
}
//external webservice call  end