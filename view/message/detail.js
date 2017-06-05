var ReactReact = require('react-native');
var Util = require('../util');

var React = require('react');

var {

    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    AlertIOS,
    ScrollVie,
    TextInput,
    ScrollView,
    Image
} = ReactReact;


var Detail = React.createClass({

    render:function() {
        var content = this.props.content;

        return (
            <ScrollView>

                <View style={DetailStyle.content}>
                    <Text style={{lineHeight:20,}}>
                        {content.message}
                    </Text>
                </View>

                <View style={[DetailStyle.luokuan, {marginTop:25}]}>
                    <View style={{flex:1}} />
                    <Text style={[DetailStyle.text, {color:'#007aff'}]}>{content.username}</Text>
                </View>

                <View style={DetailStyle.luokuan}>
                    <View style={{flex:1}} />
                    <Text style={[DetailStyle.text, {color:'#3bc1ff'}]}>{content.date}</Text>
                </View>

            </ScrollView>
        );
    }

});

var DetailStyle = StyleSheet.create({
    content:{
        marginTop:20,
        marginRight:15,
        marginLeft:15,
        opacity:0.85,
    },

    luokuan:{
        flex:1,
        flexDirection:'row',
        marginRight:20,
    },

    text:{
        lineHeight:20,
        width:90
    }


});

module.exports = Detail;