import {combineReducers} from "redux";
import * as cnst from '../constants';

const rootReducer = (state = cnst.INITIAL_STATE, action = {}) => {
    const newObj = Object.assign({}, state);
    switch (action.type) {
        case cnst.START:
            newObj.start = true;
            return newObj;

        case cnst.START_TIMER:
            newObj.timeLeft = action.timeLeft;
            return newObj;

        case cnst.PAUSE:
            newObj.start = false;
            return newObj;

        case cnst.CHANGE_BREAK:
            newObj.breakLength = action.newLength;
            return newObj;

        case cnst.CHANGE_SESSION:
            newObj.sessionLength = action.newLength;
            return newObj;

        case cnst.CHANGE_TIME_LEFT:
            newObj.timeLeft = action.newLength;
            return newObj;

        case cnst.CHANGE_PHASE:
            newObj.phase = action.newPhase;
            newObj.timeLeft = action.newLength;
            return newObj;

        case cnst.RESET:
            return Object.assign({}, cnst.INITIAL_STATE.rootReducer);

        default:
            return state;
    }
};

export default combineReducers({rootReducer});
