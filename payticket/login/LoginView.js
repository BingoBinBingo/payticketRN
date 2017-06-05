/**
 * Created by Bingo on 2017/6/5.
 */
var React  = require("react");

var ReactNative = require("react-native");

var {
    View,
    Text
}  = ReactNative;


var LoginView = React.createClass({
    render: function () {
        return (
            <View>
                <Text>我是登录界面,我等</Text>
            </View>
        );
    }
});

module.exports = LoginView;