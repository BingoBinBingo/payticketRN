var ReactNative = require('react-native');
var React = require('react');
var Util = require('../util');

var {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    AlertIOS
} = ReactNative;


var AddUser = React.createClass({

    getInitialState:function () {
        var items = ['A', 'B', 'C', 'D', 'E', 'F'];
        var tags = ['框架开发', 'BU产品', 'BU研发', '启明星', '项目管理', '公共产品'];

        return {
            items: items,
            tags: tags,
            selectA: {
                backgroundColor:'#3bc1ff',
                borderColor:'#3bc1ff',
            },

            select_A: {
                color:'#fff',
            },

            yan: {
                backgroundColor:'#3bc1ff',
                borderColor:'#3bc1ff',
            },

            yan_text: {
                color:'#fff',
            },
            partment:'框架研发',
            tag:'研发',

        };
    },

    _select:function (id) {
        var obj = {};
        var color = {};
        var itemss = {
            A:{},
            B:{},
            C:{},
            D:{},
            E:{},
            F:{},
        };

        //加上选中效果
        obj['select' + id] = {
            backgroundColor:'#3bc1ff',
            borderColor:'#3bc1ff',
        };

        color['select_' + id] = {
            color:'#fff',
        };

        this.setState(obj);
        this.setState(color);

        //清除其他颜色效果
        delete itemss[id];

        for(var i in itemss) {
            var newObj = {};
            newObj['select' + i] = {
                backgroundColor:'#fff',
                borderColor:'#ddd',
            };

            var newColor = {};
            newColor['select_' + i] = {
                color:'#000',
            };
            this.setState(newColor);
            this.setState(newObj);

        }

        //增加变量
        var partment = '框架研发';
        switch (id) {
            case 'A':
                partment = this.state.tags[0];
                break;

            case 'B':
                partment = this.state.tags[1];
                break;

            case 'C':
                partment = this.state.tags[2];
                break;

            case 'D':
                partment = this.state.tags[3];
                break;

            case 'E':
                partment = this.state.tags[4];
                break;

            case 'F':
                partment = this.state.tags[5];
                break;
            default:
                break;
        }

        this.setState({
            partment:partment,
        });

        console.log("partment: " + this.state.partment);
    },

    _selectType: function(id) {
        var obj = {};
        var color = {};
        var items = {
            yan:{},
            chan:{},
            project:{}
        };

        //加上选中的效果
        obj[id] = {
            backgroundColor:'#3bc1ff',
            borderColor:'#3bc1ff',
        };

        color[id + '_text'] = {
            color:'#fff',
        };

        this.setState(obj);
        this.setState(color);

        //清除其他选中效果
        delete items[id];

        for(var i in items) {
            var obj = {};

            obj[i] = {
                backgroundColor: '#fff',
                borderColor: '#ddd'
            }

            var color = {};
            color[i + '_text'] = {
                color: '#000',
            }

            this.setState(obj);
            this.setState(color);
        }

        //增加变量
        var tag = '研发';
        switch (id) {
            case 'yan':
                tag = '研发';
                break;

            case 'chan':
                tag = '产品';
                break;

            case 'project':
                tag = '项目';
                break;
            default:
                break;
        }


        this.setState({
            tag,
        });
    },

    _addUser: function () {
        var username = this.state.username;
        var password = this.state.password;
        var email = this.state.email;
        var url = 'http://192.168.1.106:8080/addUser';
        var firstName = username.substr(0, 1);
        var lastName = username.substr(username.length -1 ,1);

        if(username == null || password == null || email == null) {
            AlertIOS.alert('创建用户失败', '用户名 密码 邮箱 均不能为空', [{ text :'取消', style: 'cancel'}]);
        } else {
             var postVal = 'nickname=' + username
                 + '&password=' + password
                 + '&firstName=' + firstName
                 + '&lastName=' + lastName;
            console.log("addUser .. postVal: " + postVal);
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: postVal
            }).then((response) => response.json)
                .then((responseJson) => {
                    AlertIOS.alert(' 创建用户的结果: ', responseJson);
                })
                .catch((error) => {
                    AlertIOS.alert('补货到异常: ',  error.toString());
                });

        }

    },

    render:function() {
        var tagOne = [];
        var tagTwo = [];

        for(var i = 0; i< 3; i++) {
            tagOne.push(
                <TouchableOpacity
                    key={i}
                    onPress={this._select.bind(this, this.state.items[i])}>
                    <View style={[AddUserStyle.part, this.state['select' + this.state.items[i]]]}>
                        <Text style={this.state['select_' + this.state.items[i]]}>
                            {this.state.tags[i]}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        }

        for(var i = 3; i< 6; i++) {
            tagTwo.push(
                <TouchableOpacity
                    key={i}
                    onPress={this._select.bind(this, this.state.items[i])}>
                    <View style={[AddUserStyle.part, this.state['select' + this.state.items[i]]]}>
                        <Text style={this.state['select_' + this.state.items[i]]}>
                            {this.state.tags[i]}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        }

        return(
            <ScrollView style={{paddingTop:30}}>

                <View style={AddUserStyle.row}>
                    <Text style={AddUserStyle.label}>用户名</Text>
                    <TextInput style={AddUserStyle.input}
                               onChangeText={(text) => {this.setState({ username: text})}}
                               />
                </View>

                <View style={AddUserStyle.row}>
                    <Text style={AddUserStyle.label}>密    码</Text>
                    <TextInput style={AddUserStyle.input} passwor={true} placeholder='初始密码'
                               onChangeText={(text) => {this.setState({password : text})}}/>
                </View>

                <View style={AddUserStyle.row}>
                    <Text style={AddUserStyle.label}>邮    箱</Text>
                    <TextInput style={AddUserStyle.input}
                               onChangeText={(text) => {this.setState({email : text})}}/>
                </View>

                <View style={AddUserStyle.row}>
                    <Text style={AddUserStyle.label}>电    话</Text>
                    <TextInput style={AddUserStyle.input}
                               onChangeText={(text) => {this.setState({phone : text})}}/>
                </View>

                <View style={AddUserStyle.partment}>
                    {tagOne}
                </View>

                <View style={AddUserStyle.partment}>
                    {tagTwo}
                </View>


                <View style={{marginTop:30, flexDirection:'row', justifyContent:'center'}}>
                    <TouchableOpacity
                        onPress={this._selectType.bind(this, 'yan')}
                    >
                        <View style={[AddUserStyle.part, this.state.yan]}>
                            <Text style={this.state.yan_text}>研发</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this._selectType.bind(this, 'chan')}
                    >
                        <View style={[AddUserStyle.part, this.state.chan]}>
                            <Text style={this.state.chan_text}>产品</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this._selectType.bind(this, 'project')}
                    >
                        <View style={[AddUserStyle.part, this.state.project]}>
                            <Text style={this.state.project_text}>项目</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:30, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity
                        onPress={this._addUser.bind(this)}
                    >
                        <View style={AddUserStyle.btn}>
                            <Text>创建用户</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }

});

var AddUserStyle = StyleSheet.create({
    row: {
        flexDirection:'row',
        alignItems:'center',
        marginBottom:7,
    },

    label: {
        width:50,
        marginLeft:10,
    },

    input: {
        borderWidth:Util.pixel,
        height:35,
        flex:1,
        marginRight:20,
        borderColor:'#ddd',
        borderRadius:4,
        paddingLeft:5,
        fontSize:14,
    },

    partment: {
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
    },

    part: {
        width:65,
        height:30,
        borderWidth:Util.pixel,
        borderColor:'#ddd',
        borderRadius:3,
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,

    },

    btn: {
        borderColor:'#268dff',
        height:35,
        width:200,
        borderRadius:5,
        borderWidth:Util.pixel,
        alignItems:'center',
        justifyContent:'center',
    }

});

module.exports = AddUser;