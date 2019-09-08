import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {mapStateToProps, mapDispatchToProps} from "./store/actions";
import {INITIAL_STATE} from "./constants";
import {createStore, applyMiddleware} from "redux";
import {Provider, connect} from 'react-redux';
import reducers from './store/reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, INITIAL_STATE, applyMiddleware(thunk));
const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
