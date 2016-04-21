module.exports = function(weather, messenger) {

    // Morning News
    var CronJob = require('cron').CronJob;
    var job = new CronJob('00 00 09 * * *', function() {

      console.log('starting cron job')
      weather.getForecast(function(data) {
          var morning = "Happy " + data.day + " East Jeff. " + data.forecast;
          console.log(" morning", morning);
          // messenger.postMessage(morning);
      })

  }, function () {
    /* This function is executed when the job stops */
  },
  true,
  "EST"
    );

}
