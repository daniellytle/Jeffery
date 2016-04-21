module.exports = function(app, messenger, content) {

	var prefix = "@jeffery";
    // New Groupme Message
	app.post('/group-message', function(req, res) {
		console.log(req.body)
		var text = req.body.text;
		if (req.body.text.substring(0,8) == prefix) {	
			if (req.body.text == "@jeffery inspire") {
				content.getQuote(function(quote) {
					messenger.postMessage(quote, function(msg) {
						console.log(msg);
						res.status(200).end();
					})
				})
			} else {
				text = text.substring(9);
				console.log(text);
				content.getResponse(text, function(err, response, data) {
					console.log(data)
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
