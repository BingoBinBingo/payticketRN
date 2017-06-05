//noinspection JSUnresolvedVariable
import React, { Component } from 'react';

//noinspection JSUnresolvedVariable
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Image,
    WebView
} from 'react-native';


var ImportantNews = React.createClass({
    show: function (title) {
        alert("我是Title: " + title);
    },

    render: function () {
        var news= [];

        for(var i in this.props.news) {
            var text = (

                <Text onPress={ this.show.bind(this, this.props.news[i])}>
                    {this.props.news[i]}
                </Text>

            );

            news.push(text);
        }

        return (
            <View>
                <Text>今日头条</Text>
                {news}

                <TextInput style={{width:150, height:50, marginBottom:50}} clearButtonMode={'always'}/>

                <TouchableHighlight
                    onPress={() => {}}
                    underlayColor="#0f0" activeOpacity={0.1}
                    style={{width:50, height:50, backgroundColor:'#0ff'}}
                >
                    <Text onPress={() => {alert("我是里面的按钮 ")}}>按钮</Text>
                </TouchableHighlight>

                <Image resizeMode="contain" style={{marginLeft:90}} source={{uri:'http://vczero.github.io/ctrip/star_page.jpg'}}/>
                <WebView
                    url='http://weibo.com'
                    style={{flex:1, height:90, backgroundColor:'red'}}
                />
            </View>

        );
    }

});

export default ImportantNews;