var React = require('react');
var ReactNative = require('react-native');
var Redux = require('redux');
var {Provider} = require('react-redux');
var App = require('./app');
var store = require('./stores');

var {
    AppRegistry,
    Text,
    View
} = ReactNative;

var ReduxDemoView = React.createClass({

    render: function () {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );

    }

});

module.exports = ReduxDemoView;