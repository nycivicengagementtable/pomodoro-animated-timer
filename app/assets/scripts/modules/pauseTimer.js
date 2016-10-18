// pauseCountdown pauses the timer by clearing the setInterval
function pauseCountDown(event) {
  var target = $(event.target);
  // clears setInterval whcih executes the timer
  engageButton.off();
  clearInterval(loopingTimer);
  // removes the pause class and appends the start class so tha the timer
  // can be manipulated by the user.
  target.removeClass("pause");
  target.addClass("start");
  // enables the start button to allow user to start timer from the paused time
  engageButton.on("click", startCountDown);
  engageButton.html("Start");
}

module.exports = pauseCountDown;
