//noinspection JSUnresolvedVariable
import React,{ Component } from 'react';

//noinspection JSUnresolvedVariable
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Navigator, TouchableOpacity
} from 'react-native';


var HeaderView = React.createClass({
    render: function () {
        return <View><Text numberOfLines={1}>我是头部的内容</Text></View>;
    }
});


module.exports = HeaderView; //用来导出代码