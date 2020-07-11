import React from 'react';

export default React.memo(
  React.forwardRef(function Timer(
    { start, timeLeft, phase, handleStartPause, reset, timeIsRunningOut },
    ref,
  ) {
    const classes = !start ? ['fa fa-play fa-2x'] : ['fa fa-pause fa-2x'];
    const currentTime =
      timeLeft !== 60 * 60
        ? new Date(timeLeft * 1000).toISOString().substr(14, 5)
        : '60:00';
    const timeIsRunningOutClass = timeIsRunningOut ? 'timeIsRunningOut' : '';

    return (
      <div id={'timer'}>
        <div id={'timer-block'}>
          <div className={'flexBlock'}>
            <div id={'timer-label'} className={timeIsRunningOutClass}>
              {phase[0].toUpperCase() + phase.slice(1)}
            </div>
          </div>
          <div className={'flexBlock'}>
            <div id={'time-left'} className={timeIsRunningOutClass}>
              {currentTime}
            </div>
          </div>
        </div>
        <div className={'row flexBlock'}>
          <button id={'start_stop'} onClick={handleStartPause}>
            <i className={classes[0]} />
          </button>
          <button id={'reset'} onClick={reset}>
            <i className={'fa fa-refresh fa-2x'} />
          </button>
        </div>
        <audio id={'beep'} preload={'auto'} src={'https://goo.gl/65cBl1'} ref={ref} />
      </div>
    );
  }),
);
