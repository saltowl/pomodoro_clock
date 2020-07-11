import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import Clock from '../clock/index';

export default function App() {
  return (
    <div className={'flexBlock'} id={'App'}>
      <Clock />
    </div>
  );
}
