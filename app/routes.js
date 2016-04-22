module.exports = function(app, messenger, content) {

	var prefix = "jeffy";
    // New Groupme Message
	app.post('/group-message', function(req, res) {
		console.log(req.body);
		var text = req.body.text.toLowerCase();
		if (text.indexOf(prefix) > -1) {	
			if (req.body.text == "jeffy inspire") {
				content.getQuote(function(quote) {
					messenger.postMessage(quote, function(msg) {
						console.log(msg);
						res.status(200).end();
					})
				})
			} else {				
				console.log(text);
				content.getResponse(text, function(err, response, data) {
					console.log(response, data)
					
					var speech = data.result.fulfillment.speech;
					messenger.postMessage(speech, function(msg) {
						console.log(msg);
						res.status(200).end();
					})
				})
			}
		} else  {
			res.status(404).end();
		}
	});



}
