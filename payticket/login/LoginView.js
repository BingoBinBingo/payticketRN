/**
 * Created by Bingo on 2017/6/5.
 */
var React  = require("react");

var ReactNative = require("react-native");

var {
    View,
    Text,
    TouchableOpacity,
    AlertIOS
}  = ReactNative;


var LoginView = React.createClass({
    render: function () {
        return (
            <View>
                <Text>我是登录界面,我等</Text>

                <TouchableOpacity
                    style={
                        {
                            width:'50%',
                            backgroundColor:'#f00',
                            marginTop:'10%',
                            marginLeft:'10%',
                            borderRadius:10,
                        }
                    }
                    onPress={this._onBtnClick.bind(this)}
                >
                    <Text>按钮</Text>
                </TouchableOpacity>
            </View>
        );
    },

    _onBtnClick: function () {
        // AlertIOS.prompt("答案", "默认答案",null);
        this.props.navigation.navigate('Tab', { name: 'two' });
    }
});

module.exports = LoginView;