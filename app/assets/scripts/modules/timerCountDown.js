// StartCountDown and timerChange manage the executions of the clock
function startCountDown(event) {
  var target = $(event.target);
  // unbinds the events of the decrement, increment, and start events while the timer is engaged
  engageButton.off();
  subtractTime.off();
  addTime.off();
  // removes the start class and adds the pause class which chagnes the inner html of the // button
  target.removeClass("start");
  target.addClass("pause");
  // binds event which permits teh timer to be paused
  engageButton.on("click", pauseCountDown);
  engageButton.html("Pause");
  // variables which target the elements that contain the work and break times
  var workDuration = $("#work-time");
  var breakDuration = $("#break-time");
  // change the timer title to the initial working session title
  $("#timer-title").hide().html()("Time to Focus!").fadeIn();
  // begins the timer loop which loads the animation and either the break time countdown
  // or work time countdown
  timerChange(workDuration, breakDuration);
}

module.exports = startCountDown;
