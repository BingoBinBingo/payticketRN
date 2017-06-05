/**
 * Created by Bingo on 2017/6/5.
 */
var React  = require("react");

var ReactNative = require("react-native");

var {
    View,
    Text
}  = ReactNative;


var NotifyView = React.createClass({
    render: function () {
        return (
            <View>
                <Text>这是通知界面</Text>
            </View>
        );
    }
});

module.exports = NotifyView;