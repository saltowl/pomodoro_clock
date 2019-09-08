import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Clock from './components/Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={'App'}>
          <Clock
              start={this.props.start}
              sessionLength={this.props.sessionLength}
              breakLength={this.props.breakLength}
              phase={this.props.phase}
              timeLeft={this.props.timeLeft}
              handleStartPause={this.props.handleStartPause}
              changeDuration={this.props.changeDuration}
              reset={this.props.reset}
          />
        </div>
    )
  };
}

export default App;
