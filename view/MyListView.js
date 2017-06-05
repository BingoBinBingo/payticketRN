/**
 * Created by Bingo on 16/12/15.
 */

import React, { Component } from 'react';

//noinspection JSUnresolvedVariable
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, TextInput,ScrollView,Image,ListView, TouchableHighlight
} from 'react-native';
import * as ToastAndroid from "react-native/Libraries/Components/ToastAndroid/ToastAndroid.android";


export default class BingoButton extends Component {
    static defaultProps ={
        title:"我是默认按钮的名字",
        age:12
    }

    _onPressButton() {
        ToastAndroid.show("我是我", ToastAndroid.SHORT);
    }

    render() {
        return(

            <TouchableHighlight onPress={this._onPressButton}>
                <Text>BingoButton1 {this.props.title} {this.props.age}</Text>
            </TouchableHighlight>

        );
    }
}