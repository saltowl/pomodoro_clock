import React from 'react';
import UnitDuration from './UnitDuration';
import Timer from './Timer';

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        this.handleStartPause = this.handleStartPause.bind(this);
        this.changeDuration = this.changeDuration.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    handleStartPause() {
        this.props.handleStartPause(this.props.start, this.props.timeLeft, this.props.phase, this.props.breakLength, this.props.sessionLength);
    }

    changeDuration(length, name, action) {
        this.props.changeDuration(length, name, action, this.props.phase, this.props.start);
    }

    updateDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        const classes = this.state.width > 358
            ? ['row', 'col justify-content-end', 'col justify-content-start']
            : ['col', 'row', 'row'];

        return (
            <div className={'container'} id={'clock'}>
                <h1>Pomodoro Clock</h1>
                <div className={classes[0]}>
                    <div className={classes[1] + ' flexBlock'}>
                        <UnitDuration name={'break'} length={this.props.breakLength} changeDuration={this.changeDuration}/>
                    </div>
                    <div className={classes[2] + ' flexBlock'}>
                        <UnitDuration name={'session'} length={this.props.sessionLength} changeDuration={this.changeDuration}/>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col'}>
                        <Timer
                            phase={this.props.phase}
                            timeLeft={this.props.timeLeft}
                            start={this.props.start}
                            handleStartPause={this.handleStartPause}
                            reset={this.props.reset}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Clock;