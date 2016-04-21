var request = require('request');

module.exports = {

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
	}

}
