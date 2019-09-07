import {combineReducers} from "redux";

const rootReducer = (state = {}, action = {type: 'default'}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers(rootReducer);
