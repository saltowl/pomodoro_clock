import * as constants from './constants';

export const startTimer = (timeLeft) => ({
  type: constants.START_TIMER,
  timeLeft,
});

export const toggleStart = (start) => ({
  type: constants.TOGGLE_START,
  start,
});

export const changeBreak = (newLength) => ({
  type: constants.CHANGE_BREAK,
  newLength,
});

export const changeSession = (newLength) => ({
  type: constants.CHANGE_SESSION,
  newLength,
});

export const changeTimeLeft = (newLength) => ({
  type: constants.CHANGE_TIME_LEFT,
  newLength,
});

export const changePhase = (newPhase, newLength) => ({
  type: constants.CHANGE_PHASE,
  newPhase,
  newLength,
});

export const reset = () => ({
  type: constants.RESET,
});
