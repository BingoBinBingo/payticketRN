var ReactNative = require('react-native');
var React = require('react');
var Util = require('../util');

var {
    View,
    Text,
    Linking,
    ActionSheetIOS,
    AlertIOS,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    LinkingIOS,
} = ReactNative;

var Address = React.createClass({
    _showAction(name, number) {
        var options=
            ['打电话:' + number,
                '发邮件：'+ name,
            '取消'];
        var events =  [];
        events.push(function () {
            Linking.openURL('tel://' + number);
        });

        events.push(function () {
            Linking.openURL('http://' + name);
        });

        ActionSheetIOS.showActionSheetWithOptions(
            {options, cancelButtonIndex: options.length -1},function (index) {
                if(index != options.length - 1) {
                    events[index]();
                }

            } );
    },

    render:function () {
        var views = [];
        var items= [
            {
                username: '典韦',
                number:'18850547572'
            },
            {
                username: '赵云'
            },

            {
                username: '张飞'
            },
            {
                username: '诸葛亮'
            },

            {
                username: '司马懿'
            },
            {
                username: 'www.baidu.com',
                number:'18850547572'
            },
            {
                username: '大戟'
            },
            {
                username: '方天画戟'
            },

            {
                username: '榴莲班戟',
                number:'18850547572'
            },

        ];
        var colors = ['#E20079', '#FFD602', '#25BFFE', '#F90000', '#04E246', '#04E246', '#00AFC9'];

        var color = {
            backgroundColor: colors[parseInt(Math.random()*7)]
        };

        for(var i in items) {

            views.push(

                <View key={'address' + i} style={AddressStyle.row}>
                    <View style={[AddressStyle.text, color]}>
                        <Text style={{fontSize:25, color:'#f00', fontWeight:'bold'}}>
                            {items[i].username.substr(0, 1) || '未'}
                        </Text>
                    </View>

                    <View style={AddressStyle.part}>
                        <Text style={[AddressStyle.unColor, {fontWeight:'bold'}]}>
                            {items[i].username}
                            </Text>
                    </View>
                    <TouchableHighlight
                        onPress={this._showAction.bind(this, items[i].username, items[i].number)}
                    >
                        <Text>{items[i].number}</Text>
                    </TouchableHighlight>
                </View>

            );
        }

        return (
            <ScrollView>
                {views}
            </ScrollView>
        );

    }

});

var AddressStyle = StyleSheet.create({
    row:{
        height:80,
        borderBottomWidth: Util.pixel,
        borderBottomColor:'#ccc',
        flexDirection:'row',
        alignItems:'center'
    },
    text:{
        width:50,
        height:50,
        borderRadius:10,
        marginLeft:10,
        marginRight:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#E30082',
    },
    part:{
        marginLeft:5,
        flex:1,
    },
    link:{
        color:'#1BB7FF',
        marginTop:2,
    },
    unColor:{
        color: '#575656',
        marginTop:8,
        fontSize:12,
    }
});

module.exports = Address;