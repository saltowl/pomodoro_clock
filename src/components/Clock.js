import React from 'react';
import UnitDuration from './UnitDuration';
import Timer from './Timer';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.handleStartPause = this.handleStartPause.bind(this);
        this.changeDuration = this.changeDuration.bind(this);
    }

    handleStartPause() {
        this.props.handleStartPause(this.props.start, this.props.timeLeft, this.props.phase, this.props.breakLength, this.props.sessionLength);
    }

    changeDuration(length, name, action) {
        this.props.changeDuration(length, name, action, this.props.phase, this.props.start);
    }

    render() {
        return (
            <div className={'container'} id={'clock'}>
                <UnitDuration name={'break'} length={this.props.breakLength} changeDuration={this.changeDuration}/>
                <UnitDuration name={'session'} length={this.props.sessionLength} changeDuration={this.changeDuration}/>
                <Timer
                    phase={this.props.phase}
                    timeLeft={this.props.timeLeft}
                    start={this.props.start}
                    handleStartPause={this.handleStartPause}
                    reset={this.props.reset}
                />
            </div>
        );
    }
}

export default Clock;