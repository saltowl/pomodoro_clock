import React from 'react';
import UnitDuration from '../unit-duration/index';
import Timer from '../timer/index';

export default React.memo(
  React.forwardRef(function Clock({ classes, ...rest }, ref) {
    return (
      <div className={'container'} id={'clock'}>
        <h1>Pomodoro Clock</h1>
        <div className={classes[0]}>
          <div className={classes[1] + ' flexBlock'}>
            <UnitDuration
              name={'break'}
              length={rest.breakLength}
              changeDuration={rest.changeDuration}
            />
          </div>
          <div className={classes[2] + ' flexBlock'}>
            <UnitDuration
              name={'session'}
              length={rest.sessionLength}
              changeDuration={rest.changeDuration}
            />
          </div>
        </div>
        <div className={'row'}>
          <div className={'col'}>
            <Timer
              phase={rest.phase}
              timeLeft={rest.timeLeft}
              start={rest.start}
              handleStartPause={rest.handleStartPause}
              reset={rest.reset}
              timeIsRunningOut={rest.timeIsRunningOut}
              ref={ref}
            />
          </div>
        </div>
      </div>
    );
  }),
);
