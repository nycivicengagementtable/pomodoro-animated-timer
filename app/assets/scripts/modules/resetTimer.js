// resetTimer breaks the current setInterval and resets the Pomodoro Clock
function resetTimer() {
  // clear setInterval
  clearInterval(loopingTimer);
  // change timer to match work duration string
  $("#timer-clock").html(function(index, prevhtml) {
    return $("#work-time").html();
  });
  // reenable add, subtract, and start timer events to permit user to customize
  // pomodoro sequence
  $(".timer-filler").css("top", "100%");
  subtractTime.on("click", changeSessionValues);
  addTime.on("click", changeSessionValues);
  engageButton.off();
  engageButton.on("click", startCountDown);
  engageButton.html("Start");
}

module.exports = resetTimer;
