import $ from 'jquery';

// global variables which are needed accross various functions
var engageButton= $("#engage-button");
var subtractTime = $(".subtract-time");
var addTime = $(".add-time");
var resetButton = $("#reset-button");
var loopingTimer;

import { changeSessionValues, pauseCountDown, resetTimer, startCountDown, timerChange } from './modules/pomodoro';
