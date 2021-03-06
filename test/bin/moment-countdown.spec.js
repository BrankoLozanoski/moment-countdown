// Generated by CoffeeScript 1.6.2
(function() {
  var assertEqual, countdown, moment;

  if (typeof require !== "undefined" && require !== null) {
    moment = require("moment");
    countdown = require("countdown");
    require('../../bin/moment-countdown');
  } else {
    moment = this.moment;
    countdown = this.countdown;
  }

  assertEqual = function(a, b) {
    if (a !== b) {
      throw new Error("Found " + b + ", expected " + a);
    }
  };

  describe("moment.countdown()", function() {
    var end, start;

    start = moment("1982-5-25");
    end = "1990-10-14T00:00:15-04:00";
    it("returns a default countdown with no options", function() {
      return assertEqual("8 years, 4 months, 20 days, and 15 seconds", start.countdown(end).toString());
    });
    return it("returns a specific format when options are provided", function() {
      assertEqual("100 months, 28800 minutes, and 15 seconds", start.countdown(end, countdown.MONTHS | countdown.MINUTES | countdown.SECONDS, NaN, 1).toString());
      return assertEqual("100 months, and 28800.25 minutes", start.countdown(end, countdown.MONTHS | countdown.MINUTES | countdown.SECONDS, 2, 2).toString());
    });
  });

}).call(this);
