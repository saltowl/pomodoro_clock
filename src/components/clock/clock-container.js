import React from 'react';
import Clock from './clock-view';

class ClockContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      timer: null,
      timeIsRunningOut: false,
    };
  }

  toggleTimeIsRunningOut = (value) => {
    this.setState({ timeIsRunningOut: value });
  };

  playBuzzer = () => {
    this.buzzer.play();
  };

  stopBuzzer = () => {
    this.buzzer.pause();
    this.buzzer.currentTime = 0;
  };

  setTimer = () => {
    const { breakLength, sessionLength, timeLeft, phase } = this.props;
    if (timeLeft >= 1) {
      if (timeLeft <= 61) {
        this.toggleTimeIsRunningOut(true);
      }
      if (timeLeft <= 3) {
        this.playBuzzer();
      }
      this.props.startTimer(timeLeft - 1);
    } else {
      switch (phase) {
        case 'session': {
          this.props.changePhase('break', breakLength * 60);
          break;
        }
        case 'break': {
          this.props.changePhase('session', sessionLength * 60);
          break;
        }
        default: {
          break;
        }
      }
      this.toggleTimeIsRunningOut(false);
    }
  };

  handleStartPause = () => {
    if (this.props.start) {
      this.props.toggleStart(false);
      this.resetTimer();
    } else {
      this.props.toggleStart(true);
      const timer = setInterval(this.setTimer, 1000);
      this.setState({ timer });
    }
  };

  changeDuration = (length, name, diff) => {
    const { phase, start } = this.props;
    let newLength = length + diff;
    if (newLength <= 0 || newLength > 60) {
      return;
    }
    if (name === 'break') {
      this.props.changeBreak(newLength);
    } else if (name === 'session') {
      this.props.changeSession(newLength);
    }
    if (!start && name === phase) {
      this.props.changeTimeLeft(newLength * 60);
    }
  };

  reset = () => {
    this.props.toggleStart(false);
    this.resetTimer();
    this.stopBuzzer();
    this.props.reset();
    this.toggleTimeIsRunningOut(false);
  };

  resetTimer = () => {
    clearInterval(this.state.timer);
    this.setState({ timer: null });
  };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    this.resetTimer();
  }

  render() {
    const classes =
      this.state.width > 358
        ? ['row', 'col justify-content-end', 'col justify-content-start']
        : ['col', 'row', 'row'];
    const { breakLength, sessionLength, phase, timeLeft, start } = this.props;
    const props = { breakLength, sessionLength, phase, timeLeft, start };

    return (
      <Clock
        classes={classes}
        {...props}
        timeIsRunningOut={this.state.timeIsRunningOut}
        reset={this.reset}
        changeDuration={this.changeDuration}
        handleStartPause={this.handleStartPause}
        ref={(buzzer) => (this.buzzer = buzzer)}
      />
    );
  }
}

export default ClockContainer;
