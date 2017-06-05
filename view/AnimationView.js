/**
 * Created by Bingo on 16/12/15.
 */

import React, { Component } from 'react';

//noinspection JSUnresolvedVariable
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, TextInput,ScrollView,Image,ListView, TouchableHighlight, TouchableOpacity, DatePickerIOS
} from 'react-native';

var TimerMixin = require('react-timer-mixin');

var AnimationView = React.createClass({
    mixins:[TimerMixin],

    getInitialState: function () {
        return{
            width:10,
            height:10
        };
    },

    componentDidMount: function () {
        var _that = this;

        function doAnimated() {
            console.log(" doAnimated ");
            _that.setState({
                height: _that.state.height + 10
            });

            if(_that.state.height < 300) {
                requestAnimationFrame(doAnimated);
            }
        }

        requestAnimationFrame(doAnimated);

    },

    render: function () {
        var css = [];

        css.push(styles.progress);

        if(this.state.width) {
            css.push({height:this.state.height, marginTop:50});
        }

        return(
            <View>
                <View style={css}></View>

                <DatePickerIOS
                    onDateChange={function (date) {
                        alert("时间变化: " + date);
                    }}
                    mode="countdown"
                    date={new Date()}
                />
            </View>

        );
    },


});

var styles = StyleSheet.create({
    progress: {
        height:10,
        width:290,
        marginTop:10,
        marginLeft:100,
        backgroundColor:"#f00"
    }

});

export default AnimationView;