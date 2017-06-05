/**
 * Created by Bingo on 2017/6/5.
 */
var React  = require("react");

var ReactNative = require("react-native");
var NetUtils = require("../utils/NetUtils");

var {
    View,
    Text,
    TouchableOpacity,
    AlertIOS,
    Image,
    StyleSheet
}  = ReactNative;


var StyleObj = StyleSheet.create({
    rooView: {
        flex:1,
        alignItems:'center'
    },

    logoImg: {
        marginTop:'30%'
    },

    loginBtn: {
        width: '50%',
        height: '5%',
        backgroundColor: '#01aaff',
        borderRadius: 2,
        alignItems: 'center',
    },

    loginTv: {
        fontSize:23,
        color:'#fff',
        alignItems: 'center',
        justifyContent:'center'
    }
});

var LoginView = React.createClass({
    render: function () {
        return (
            <View style={StyleObj.rooView}>

                <Image
                    style={StyleObj.logoImg}
                    source={require("../../img/hello_log.png")}
                />

                <TouchableOpacity
                    style={StyleObj.loginBtn}
                    onPress={this._onBtnClick.bind(this)}
                >
                    <Text style={StyleObj.loginTv}>登录</Text>
                </TouchableOpacity>
            </View>
        );
    },

    _onBtnClick: function () {
        // AlertIOS.prompt("答案", "默认答案",null);
        this.props.navigation.navigate('Tab', { name: 'two' });

        NetUtils.get(NetUtils.DouB_Api, null);
    }
});

module.exports = LoginView;