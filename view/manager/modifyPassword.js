var React = require('react');
var ReactNative = require('react-native');


var {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} = ReactNative;


var ModifyPassword = React.createClass({

    getInitialState:function() {
        return {
            username: '',
            password: '',
        };
    },

    render:function() {
        return(
            <ScrollView>
                <View style={{height:35, marginTop:30}}>
                    <TextInput
                        value={this.state.username}
                        style={ModifyStyle.input}
                        placeholder=" 原始密码"/>
                </View>

                <View style={{height:35, marginTop:5}}>
                    <TextInput
                        value={this.state.password}
                        style={ModifyStyle.input}
                        placeholder="新密码"/>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={this._resetPassword}
                    >
                        <View style={ModifyStyle.btn}>
                            <Text>重设密码</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    },

    _resetPassword:function () {

        // var url = 'http://172.20.10.2:8080/login';
        // var url = 'http://192.168.31.228:8080/login';
        // var url = 'http://bbs.reactnative.cn/api/category/3';

        var url = 'http://192.168.1.104:8080/login';
        fetch(url, {
            method: 'GET',
            headers:{
              'Accept' : 'application/json',
              'Content-Type' : 'application/json',
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log('下载到的数据为:' + responseJson[0]);
                this.setState({
                    username:responseJson[0].nickname,
                    password:responseJson[0].password,
                });
            })
            .catch((error) => {
                console.log(error);
            });

    }


});

var ModifyStyle = StyleSheet.create({

    input: {
        flex:1,
        marginLeft:20,
        marginRight:20,
        height:35,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:4,
        paddingLeft:10,
        fontSize:14
    },

    btn: {
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        backgroundColor:'#1db8ff',
        height:38,
        marginLeft:20,
        marginRight:20,
        borderRadius:4,
    }

});

module.exports = ModifyPassword;