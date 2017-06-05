'use strict';
var ReactReact = require('react-native');
var Util = require('./util');
var React = require('react');

var MView = require('./manager/modifyPassword');
var AView = require('./manager/addUser');
var DView = require('./manager/deleteUser');
var PView = require('./manager/postMessage');

var {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    AlertIOS,
    ScrollVie,
    TextInput,
    ScrollView,
    TouchableOpacity
} = ReactReact;

var Manager = React.createClass({
    render:function() {
        var colors = ['#F4000B', '#17b4ff', '#ffd900', '#f00000'];
        var tags = ['U', 'A', 'D', 'M'];
        var items = ['修改密码', '增加联系人', '删除联系人', '发布公告'];
        var components = [MView, AView, DView, PView];
        var JSXDOM = [];


        for(var i in items) {
            JSXDOM.push(
                <TouchableOpacity
                    key={i}
                    onPress={this._loadPage.bind(this, components[i], items[i])}
                >
                    <View style={[ManagerStyle.item, {flexDirection:'row'}]}>
                        <Text style={[ManagerStyle.tag, {color:colors[i]}]}>{tags[i]}</Text>
                        <Text style={[ManagerStyle.font, {flex:1}]}>{items[i]}</Text>
                    </View>
                </TouchableOpacity>
            );
        }

        return(
            <ScrollView style={ManagerStyle.container}>

                <View style={ManagerStyle.wrapper}>
                    {JSXDOM}
                </View>

                <View style={{marginTop:30}}>
                    <TouchableOpacity onPress={this._clear}>
                        <View style={[ManagerStyle.item, {flexDirection:'row'}]}>
                            <Text style={[ManagerStyle.tag, {color:colors[colors.length-1]}]}>Q</Text>
                            <Text style={[ManagerStyle.font, {flex:1}]}>退出登录</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    },
    
    _clear:function () {
        AlertIOS.alert('提示', '删除用户');
    },
    
    _loadPage:function (cpm, title) {
        this.props.navigator.push({
            component:cpm,
            title:title,
        });
    }

});

var ManagerStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
    },

    item:{
        height:40,
        justifyContent:'center',
        borderTopWidth:Util.pixel,
        borderTopColor:'#ddd',
        backgroundColor:'#fff',
        alignItems:'center',
    },

    font:{
        fontSize:15,
        marginLeft:5,
        marginRight:10,
    },

    wrapper:{
        marginTop:30,
    },

    tag:{
        marginLeft:10,
        fontSize:16,
        fontWeight:'bold'
    }
});


module.exports = Manager;