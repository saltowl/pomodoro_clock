import { combineReducers } from 'redux';
import * as constants from './constants';

const clockReducer = (state = constants.INITIAL_STATE.clock, action = {}) => {
  switch (action.type) {
    case constants.TOGGLE_START: {
      const { start } = action;
      return { ...state, start };
    }

    case constants.START_TIMER: {
      const { timeLeft } = action;
      return { ...state, timeLeft };
    }

    case constants.CHANGE_BREAK: {
      return { ...state, breakLength: action.newLength };
    }

    case constants.CHANGE_SESSION: {
      return { ...state, sessionLength: action.newLength };
    }

    case constants.CHANGE_TIME_LEFT: {
      return { ...state, timeLeft: action.newLength };
    }

    case constants.CHANGE_PHASE: {
      return { ...state, phase: action.newPhase, timeLeft: action.newLength };
    }

    case constants.RESET: {
      return { ...constants.INITIAL_STATE.clock };
    }

    default:
      return { ...state };
  }
};

export const getClock = (state) => state.clock;

export default combineReducers({ clock: clockReducer });
