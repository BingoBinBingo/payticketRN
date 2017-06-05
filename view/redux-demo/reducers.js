var {combineReducers}  = require('redux');
var {DECREASE, INCREASE, RESET} = require('./actionTypes');

const defaultState = {
    count: 5,
    factor: 1
};

var count = function (state = defaultState, action) {
    switch (action.type) {
        case DECREASE:
            return {...state, count: state.count - state.factor};

        case INCREASE:
            return {...state, count: state.count + state.factor};

        case RESET:
            return {...state, count: 0};

        //这个代表初始状态
        default:
            return state;
    }
};

module.exports = combineReducers({
    count
});
