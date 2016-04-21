var request = require('request');
module.exports = {
	
	postMessage: function(text, cb) {
		request.post({
			url: 'https://api.groupme.com/v3/bots/post',
			form: {
				"text": text,
				"bot_id" : "4419fffe3ed97a3a261859a1b5"
			}
		}, cb);
	}
}