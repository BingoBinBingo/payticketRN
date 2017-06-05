/**
 * Created by Bingo on 16/12/15.
 */

import React, { Component } from 'react';

//noinspection JSUnresolvedVariable
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, TextInput,ScrollView,Image,ListView, TouchableHighlight, TouchableOpacity
} from 'react-native';
import * as ToastAndroid from "react-native/Libraries/Components/ToastAndroid/ToastAndroid.android";


export default class SecondPageView extends Component {
    static defaultProps ={
        name:"我是第二个界面",
    }

    render() {
        return(
            <View style={bingoStyle.welcomeStyle}>

                <Text style={{flex:1}}>Hi world 我是第二个页面,我携带的数据是{this.props.name}</Text>

                <TouchableOpacity
                    style={{flex:1}}
                    onPress={()=>{this.props.navigator.pop()}}
                >
                    <Image
                        source={require('./../img/widget_contact_edit_change_bg_n.png')}
                    />
                </TouchableOpacity>

            </View>
        );
    }
}

const bingoStyle = StyleSheet.create({
    welcomeStyle: {
        flexDirection:'row',
        backgroundColor:'red'
    }

});

module.exports = SecondPageView;
