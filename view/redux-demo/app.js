var React = require('react');
var ReactNative = require('react-native');
var {connect} = require('react-redux');

var {
    AppRegistry,
    Text,
    View,
    TouchableOpacity
} = ReactNative;

var App = React.createClass({

    render: function () {
        return (
            <View>
                <Text>我是ReduxDemo, {this.props.counter}</Text>

                <TouchableOpacity style={{marginTop:10, backgroundColor:'red'}}>
                    <Text>Decrease</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:10}}>
                    <Text>Increase</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:10}}>
                    <Text>Reset</Text>
                </TouchableOpacity>

            </View>
        );
    }
});

const mapStateToProp = (state) => {
    return {
        counter: state.count
    }
};

// module.exports = App;
module.exports = connect(mapStateToProp)(App);

