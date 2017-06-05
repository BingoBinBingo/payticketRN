/**
 * Created by Bingo on 2017/6/5.
 */
var React  = require("react");

var ReactNative = require("react-native");

var {
    View,
    Text
}  = ReactNative;


var MeView = React.createClass({
    render: function () {
        return (
            <View>
                <Text>我是Me</Text>
            </View>
        );
    }
});

module.exports = MeView;