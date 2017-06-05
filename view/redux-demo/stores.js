var { createStore, applyMiddleware, compose } = require('redux');
var createLogger = require('redux-logger');
var rootReducer = require('./reducers');

const configureStore = preloadedState => {
    return createStore (
        rootReducer,
        preloadedState,
        compose (
            applyMiddleware(createLogger())
        )
    );
};

const store = configureStore();

export default store;

