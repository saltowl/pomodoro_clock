import React from 'react';

export default React.memo(function UnitDuration({ name, changeDuration, length }) {
  return (
    <div className={'UnitDuration'}>
      <div className={'row flexBlock'}>
        <div id={`${name}-label`}>{`${
          name[0].toLocaleUpperCase() + name.slice(1)
        } Length`}</div>
      </div>
      <div className={'row flexBlock'}>
        <button id={`${name}-decrement`} onClick={() => changeDuration(length, name, -1)}>
          <i className={'fa fa-arrow-down'} />
        </button>
        <div id={`${name}-length`}>{length}</div>
        <button id={`${name}-increment`} onClick={() => changeDuration(length, name, 1)}>
          <i className={'fa fa-arrow-up'} />
        </button>
      </div>
    </div>
  );
});
