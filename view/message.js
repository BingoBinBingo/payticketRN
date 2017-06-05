var ReactReact = require('react-native');
var Util = require('./util');
var React = require('react');
var Item = require('./message/item');
var Detail = require('./message/detail');

var {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    AlertIOS,
    ScrollVie,
    TextInput,
    ScrollView
} = ReactReact;

var Message  = React.createClass({

    render:function() {
        var content = [
            {
              message:'考试', username:'张三',date:'2.17'
            },
            {
              message:'跑步', username:'李四',date:'4.17'
            },

            {
                message:'游泳', username:'黄彬',date:'7.17'
            },

            {
                message:'跳高', username:'行长',date:'10.17'
            },
        ];
        var items = [];

        for(var i = 0; i < content.length; i++) {
            items.push(

                <Item
                    key={i}
                    data={content[i]}
                    nav={this.props.navigator}
                    component={Detail}
                    text={content[i].message}
                    name={content[i].username}
                    date={content[i].date}
                />

            );
        }

        return (
            <ScrollView  style={MessageStyle.container}>
                <View style={{height:50, padding:7}}>
                    <TextInput style={MessageStyle.search} placeholder="   搜索"/>
                </View>

                <View style={MessageStyle.itemsContainer}>
                    {items}
                    <View style={{height:35}}/>
                </View>

            </ScrollView>
        );
    }

});

var MessageStyle = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:'#f5f5f5',
        flexDirection:'column'
    },

    search: {
        height:35,
        borderWidth:Util.pixel,
        borderColor:'#ccc',
        borderRadius:6,
        backgroundColor:'#fff',
        paddingLeft:15

    },

    itemsContainer:{
        backgroundColor:'#fff',
        borderTopWidth:1,
        borderTopColor:'#ddd'
    }

});


module.exports = Message;