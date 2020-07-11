import Clock from './clock-container';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { getClock } from '../../redux/reducers';

const mapStateToProps = (state) => ({
  start: getClock(state).start,
  sessionLength: getClock(state).sessionLength,
  breakLength: getClock(state).breakLength,
  timeLeft: getClock(state).timeLeft,
  phase: getClock(state).phase,
});

const mapDispatchToProps = (dispatch) => ({
  changePhase: (statePhase, stateTimeLeft) =>
    dispatch(actions.changePhase(statePhase, stateTimeLeft)),
  startTimer: (time) => dispatch(actions.startTimer(time)),
  toggleStart: (start) => dispatch(actions.toggleStart(start)),
  changeBreak: (newLength) => dispatch(actions.changeBreak(newLength)),
  changeSession: (newLength) => dispatch(actions.changeSession(newLength)),
  changeTimeLeft: (newTimeLeft) => dispatch(actions.changeTimeLeft(newTimeLeft)),
  reset: () => dispatch(actions.reset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
