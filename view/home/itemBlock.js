var React = require('react');
var ReactReact = require('react-native');
var HeaderView = require('../HeaderView');
var Address = require('./Address');


var {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} = ReactReact;


//每个单项 组件
var itemBlock = React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    _loadPage: function () {
        var nav = this.props.nav;
        nav.push({
            component: Address,
            title:'联系人列表'
        });

        // AlertIOS.alert("名字:" + this.props.title, "部门:" + this.props.partment + ", nav:" + nav);

    },

    render: function () {

        var size  = {
            width           : parseInt(this.props.width),
            height          : parseInt(this.props.width),
            backgroundColor : this.props.color,
        };

        return (

            <TouchableHighlight
                underlayColor='#FFF'
                onPress={this._loadPage}
            >

                <View style={[ItemStyle.itemBlock, size]}>

                    <View>
                        <Text style={ItemStyle.fontSize18}>{this.props.title}</Text>
                    </View>

                    <View>
                        <Text style={ItemStyle.fontSize10}>{this.props.partment}</Text>
                    </View>

                </View>

            </TouchableHighlight>

        );



    }

});

var ItemStyle = StyleSheet.create({

    itemBlock: {
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:5,
        marginLeft:10,
        shadowColor:'#ff0',
        shadowRadius:13,
        shadowOffset:{width:10, height:20}
    },

    fontSize18: {
        color:'#fff',
        fontSize:18,
        fontWeight:'500',
    },

    fontSize10: {
        color:'#fff',
        fontSize:10,
    }

});

module.exports = itemBlock;