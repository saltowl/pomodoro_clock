import { createStore } from 'redux';
import rootReducer from './reducers';
import { INITIAL_STATE } from './constants';

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
