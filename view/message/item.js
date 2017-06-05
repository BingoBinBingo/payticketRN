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
    TouchableOpacity
} = ReactReact;

var Item = React.createClass({

    _loadPage:function(data) {
        var content = data;
        this.props.nav.push({
            component:this.props.component,
            title:'消息详情',
            passProps: {
                content:content
            }
        });
    },

    render:function() {
        var text = this.props.text;

        return(

            <TouchableOpacity
                onPress={this._loadPage.bind(this, this.props.data)}
            >
                <View style={MessageStyle.item}>
                    <View style={MessageStyle.width55}>
                        <Text style={{color:'#fff', fontSize:18, fontWeight:'bold'}}>
                            {this.props.name.substr(0,1)}
                        </Text>
                    </View>

                    <View style={{flexDirection:'column', flex:1}}>

                        <View>
                            <Text numberOfLines={2} style={MessageStyle.text}>
                                {this.props.text}
                            </Text>
                        </View>

                        <View>
                            <Text>
                                {this.props.date}
                            </Text>
                        </View>
                    </View>

                    <View numberOfLines={1} style={MessageStyle.m10}>
                        <Text style={MessageStyle.name}>
                            {this.props.name}
                        </Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }

});

var MessageStyle = StyleSheet.create({

    item:{
        height:80,
        padding:5,
        borderBottomWidth:Util.pixel,
        borderBottomColor:'#ddd',
        flexDirection:'row',
        alignItems:'center',
    },

    m10:{
        marginLeft:10
    },

    name:{
        color:'#929292',
        fontSize:13
    },

    text:{
        flex:1,
        marginBottom:5,
        opacity:0.7,

    },

    width55:{
        width:50,
        height:50,
        borderRadius:4,
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#05c147',
        marginRight:10,
    }
});

module.exports = Item;