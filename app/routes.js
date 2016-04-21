module.exports = function(app, messenger, content) {

    // New Groupme Message
	app.post('/group-message', function(req, res) {
		if (req.body.text == "@jeffery inspire") {
			content.getQuote(function(quote) {
				messenger.postMessage(quote, function(msg) {
					console.log(msg);
					res.status(200).end();
				})
			})
		} else {
			res.status(404).end();
		}
	});



}
