import * as cnst from '../constants';

const start = () => {
    return {
        type: cnst.START
    };
};

const startTimer = (timeLeft) => {
    return {
        type: cnst.START_TIMER,
        timeLeft
    };
};

const pause = () => {
    return {
        type: cnst.PAUSE
    };
};

const changeBreak = (newLength) => {
    return {
        type: cnst.CHANGE_BREAK,
        newLength
    };
};

const changeSession = (newLength) => {
    return {
        type: cnst.CHANGE_SESSION,
        newLength
    };
};

const changeTimeLeft = (newLength) => {
    return {
        type: cnst.CHANGE_TIME_LEFT,
        newLength
    };
};

const changePhase = (newPhase, newLength) => {
    return {
        type: cnst.CHANGE_PHASE,
        newPhase,
        newLength
    };
};

const reset = () => {
    return {
        type: cnst.RESET
    }
}

export const mapStateToProps = (state) => {
    return {
        'start': state.rootReducer.start,
        'sessionLength': state.rootReducer.sessionLength,
        'breakLength': state.rootReducer.breakLength,
        'timeLeft': state.rootReducer.timeLeft,
        'phase': state.rootReducer.phase
    };
};

export const mapDispatchToProps = (dispatch) => {
    let timer;

    return {
        handleStartPause: (stateStart, stateTimeLeft, statePhase, breakLength, sessionLength) => {
            if (stateStart) {
                dispatch(pause());
                clearInterval(timer);
            } else {
                dispatch(start());
                timer = setInterval(() => {
                    if (stateTimeLeft >= 1) {
                        dispatch(startTimer(--stateTimeLeft));
                    } else {
                        if (statePhase === 'session') {
                            statePhase = 'break';
                            stateTimeLeft = breakLength * 60;
                        } else if (statePhase === 'break') {
                            statePhase = 'session';
                            stateTimeLeft = sessionLength * 60;
                        }
                        dispatch(changePhase(statePhase, stateTimeLeft));
                    }
                }, 1000, dispatch, startTimer, stateTimeLeft);
            }
        },

        changeDuration: (length, name, action, phase, start) => {
            let newLength = action === 'inc' ? length + 1 : length - 1;
            if (newLength <= 0 || newLength > 60) {
                return;
            }
            if (name === 'break') {
                dispatch(changeBreak(newLength));
            } else if (name === 'session') {
                dispatch(changeSession(newLength))
            }
            if (!start && name === phase) {
                dispatch(changeTimeLeft(newLength * 60));
            }
        },

        reset: () => {
            dispatch(pause());
            clearInterval(timer);
            dispatch(reset());
        }
    };
};