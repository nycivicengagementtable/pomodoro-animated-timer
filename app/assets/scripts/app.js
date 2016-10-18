import $ from 'jquery';
// global variables needed across various functions
const engageButton = $("#start-button");
const subtractTime = $(".subtract-time");
const addTime = $(".add-time");
const resetButton = $("#reset-button");
let loopingTimer;

// event listeners which allow the user to start and reset the pomodoro clock
engageButton.on("click", startCountDown);
resetButton.on("click", resetTimer);

// event listeners which allow the user to change the break and work session times
subtractTime.on("click", changeSessionValues);
addTime.on("click", changeSessionValues);

import { changeSessionValues, pauseCountDown, resetTimer, startCountDown, timerChange } from './modules/pomodoro';
