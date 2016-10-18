// changeSessionValues permits user to change the length/values of the break and work
// sessions
function changeSessionValues(event) {
  var target = $(event.target);
  var timerNumber;
  // decreases the break or work time by 1
  if (target.is(subtractTime)) {
    target.next().html(function(index, prevhtml) {
      // prevents the number from being lower than 1
      if(parseInt(prevhtml) === 1) {
        return prevhtml;
      }
      timerNumber = parseInt(prevhtml) - 1;
      return timerNumber;
    });
  }
  // increase the break or work time by 1
  if(target.is(addTime)) {
    target.next().html(function(index, prevhtml) {
      timerNumber = parseInt(prevhtml) + 1;
      return timerNumber;
    });
  }
  // every time the work duration is changed the timer clock html is also changed
  if(target.parents().is("#work-container")) {
    $("#timer-clock").html(timerNumber);
  }
}

module.exports = changeSessionValues;
