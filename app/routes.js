module.exports = function(app, messenger, content) {

	var prefix = "jeffy";
    // New Groupme Message
	app.post('/group-message', function(req, res) {
		console.log(req.body);
		var text = req.body.text.toLowerCase();
		var textArray = text.split(' ');
		if (textArray[0] == 'jeffy') {	
			if (textArray[1] == 'inspire') {
				content.getQuote(function(quote) {
					messenger.postMessage(quote, function(msg) {
						console.log(msg);
						res.status(200).end();
					})
				})
			} else if (textArray[1] == 'gifme') {
				var query = textArray.slice(2);
				console.log(query)
				content.getGif(query, function(url) {
					messenger.postMessage(url, function() {
						console.log(url);
						res.status(200).end();
					});
				});
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
