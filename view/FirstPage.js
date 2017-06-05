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

import SecondPageView from './SecondPage'


class FirstPageView extends Component {

    constructor(props){
        super(props);
    }


    _onPressBtn(obj) {
        // console.warn("111我是第一个也面打印delog");
        obj.props.navigator.push({
            name:"SecondPageView",
            cmp:SecondPageView,

        });
    }



    render() {
        return(
            <View style={{flexDirection:"column", backgroundColor:'blue'}}>
                <Text>Hi world 11我是默认1的欢迎界面, 我携带的数据是11:{this.props.name}</Text>

                <TouchableOpacity
                    style={{marginLeft:100, marginTop:50}}
                    onPress={()=>{this._onPressBtn(this)} }
                >
                    <Image
                        source={require("./../img/widget_contact_edit_change_bg_n.png")}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

module.exports = FirstPageView;