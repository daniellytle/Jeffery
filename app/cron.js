module.exports = function(content, messenger) {

    // Morning News
    var CronJob = require('cron').CronJob;
    var job = new CronJob('40 9 * * * *', function() {

      console.log('starting cron job')
      content.getForecast(function(data) {
          var morning = "Happy " + data.day + " East Jeff. " + data.forecast;
          console.log(" morning", morning);
          // messenger.postMessage(morning);
      })

  }, function () {
    /* This function is executed when the job stops */
  },
  true
    );

}
