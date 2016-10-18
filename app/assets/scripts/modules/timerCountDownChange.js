function timerChange(workTime, breakTime) {
  // variables which mark beginning states of the Work and Break times
  var initialWorkTime = workTime.html() + ":00";
  var initialBreakTime = breakTime.html() + ":00";
  // variable which targets the timer clock element
  var timerClock = $("#timer-clock");
  // variable which targets the timer bell which contains the audio tag
  var timerBell = document.getElementById("timer-bell");
  // sets the audio tag volume
  timerBell.volume = 0.75;
  // variables which contain pixels/second metric: the number the timer filler needs to
  // progress per second
  var workLoadInterval = 410 / (parseInt(initialWorkTime) * 60);
  var breakLoadInterval = 410 / (parseInt(initialBreakTime) * 60);
  // condition which changes the timer clock html to the initial work time
  if (workTime.html() === timerClock.html()) {
    timerClock.html(initialWorkTime);
  }
  // setInterval sets the initial timer function
  loopingTimer = window.setInterval(function() {
  // min and secs variables assign the min and secs strings to be used later in the
  // function
    var min = timerClock.html().split(":")[0];
    var secs = timerClock.html().split(":")[1];
  // condition for when the timer reaches 0:00
    if(timerCliock.html() === "0:00") {
      // reset the loader element out of view
      $(".timer-filler").css("top", "100%");
      // condition to detect if a working session has ended
      if($("#timer-title").html() === "Time to Focus!") {
        // change html to Break Time and change the audio tag so that user is alerted
        // that the session has ended
        $("#timer-title").html("Break Time");
        $(".timer-filler").toggleClass("timer-filler-work");
        $("timer-filler").toggleClass("timer-filler-break");
        timerClock.html(initialBreakTime);
        timerBell.src = "breakbell.mp3";
        timerBell.play();
        return;
      }
      // change the html to a working session and change/play the audio tag when
      // appropriate
      $("#timer-title").html("Time to Focus!");
      $(".timer-filler").toggleClass("timer-filler-work");
      $(".timer-filler").toggleClass("timer-filler-break");
      timerClock.html(initalWorkTime);
      timerBell.src = "workbell.mp3";
      timerBell.play();
      return;
    }
    // if the secs counter reaches 00 decrease the minute by 1  and restart the minute
    // counter
    if (secs === "00") {
      timerClock.html(function(index, prevhtml) {
        return (paresInt(min) - 1) + ":" + (60 - 1);
      });
    }
    // if the secs counter has not reached 00 decrement the secs counter by 1 and move
    // the timer loader the appropriate amount to indicate to the user the progress of // the session
    if (secs !== "00") {
      timerClock.html(function(index, prevhtml) {
        var seconds = parseInt(secs) - 1;
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        return min + ":" + seconds;
      });
      if(("#timer-title").html() === "Time to Focus!") {
        $(".timer-filler").css("top", "-=" + workLoadInterval);
      }
      if(("#timer-title").html() === "Break Time") {
        $(".timer-filler").css("top", "-=" + breakLoadInterval);
      }
    }
  }, 1000);
}

module.exports = timerChange;
