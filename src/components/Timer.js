import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = !this.props.start ? ['fa fa-play'] : ['fa fa-pause'];
        const currentTime = this.props.timeLeft !== 60*60 ? new Date(this.props.timeLeft * 1000).toISOString().substr(14, 5) : '60:00';
        const phase = this.props.phase[0].toUpperCase() + this.props.phase.slice(1);

        return (
            <div className={'container'}>
                <div className={'row'}>
                    <div id={'timer-label'}>{phase}</div>
                </div>
                <div className={'row'}>
                    <div id={'time-left'}>{currentTime}</div>
                </div>
                <div className={'row'}>
                    <button id={'start_stop'} onClick={this.props.handleStartPause}><i className={classes[0]}/></button>
                    <button id={'reset'} onClick={this.props.reset}><i className={'fa fa-refresh'}/></button>
                </div>
                <audio id={'beep'}></audio>
            </div>
        );
    }
}

export default Timer;