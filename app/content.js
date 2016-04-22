var request = require('request');
module.exports = {

	getQuote: function(callback) {
		request('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', function(error, response, data) {
			data = JSON.parse(data);
			data = data.quoteText;
			callback(data);
		})
	},

	getForecast: function(callback) {
		request('http://api.wunderground.com/api/f16862c4e9ebe2fb/forecast/q/MI/Ann_Arbor.json', function (error, response, body) {
			if (!error && response.statusCode == 200) {
		    	body = JSON.parse(body);
		    	var forecast = body.forecast.txt_forecast.forecastday[0];
		    	callback({
		    		forecast: forecast.fcttext,
		    		day: forecast.title
		    	});
			}
		})
	}, 

	getResponse: function(query, callback) {
		request.post({
			url: 'https://api.api.ai/v1/query?v=20150910',
			headers: {
				"content-type": "application/json; charset=utf-8",
				"authorization": "Bearer 737fb10490614339a26530407fba687b"
			},
			json: {
				"query": query,
				"lang": "en",
				'sessionId':'1234567890'
			}
		}, callback);
	},

	getGif: function(query, callback) {
		query = query.replace(',','+');
		console.log(query);
		request('http://api.giphy.com/v1/gifs/search?q='+ query +'&api_key=dc6zaTOxFJmzC', function(error, response, body) {
			body = JSON.parse(body);
			var id = body.data[0].id;
			var url = "http://i.giphy.com/" + id + ".gif";
			return url;
		})
	}

}