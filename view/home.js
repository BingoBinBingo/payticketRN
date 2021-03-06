var React = require('react');
var ReactReact = require('react-native');
var Util = require('./util');

var {

    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    AlertIOS,
    ScrollView
} = ReactReact;

var ItemBlock = require('./home/itemBlock');

var Home = React.createClass({
    propsType: {
        title:React.PropTypes.string.isRequired,
    },

    componentWillMount:function () {
        console.log(" home componentWillMount");
    },

    componentDidMount:function () {
        console.log(" home componentDidMount");
    },

    getDefaultProps:function () {
        return {
            name : 'hb',
            passwd: 'pad',
        };
    },

    getInitialState: function () {
        var width = Math.floor(((Util.size.width - 20) - 50) / 4);

        //数据的初始化
        var items = [

            {
                id:1,
                title: '研发',
                partment: '框架研发',
                color: '#126AFF',
            },

            {
                id:2,
                title: '研发',
                partment: 'BU研发',
                color: '#FFD600',
            },

            {
                id:3,
                title: '产品',
                partment: '公共产品',
                color: '#F80728',
            },

            {
                id:4,
                title: '产品',
                partment: 'BU产品',
                color: '#05C147',
            },

            {
                id:5,
                title: '产品',
                partment: '启明星',
                color: '#FF4EB9',
            },

            {
                id:6,
                title: '项目',
                partment: '项目管理',
                color: '#EE810D',
            }
        ];

        return{
            items: items,
            width: width
        };
    },

    render:function () {
        console.log(" home render");
        var Items1 = [];
        var Items2 = [];
        var items = this.state.items;
        for(var i = 0; i < 4; i++) {

            Items1.push(

                <ItemBlock
                    key={items[i].id}
                    title={items[i].title}
                    partment={items[i].partment}
                    width={this.state.width}
                    color={items[i].color}
                    nav={this.props.navigator}
                />

            );

        }

        for(var i = 4; i < items.length; i++) {

            Items2.push(

                <ItemBlock
                    key={items[i].id}
                    title={items[i].title}
                    partment={items[i].partment}
                    width={this.state.width}
                    color={items[i].color}
                    nav={this.props.navigator}
                />

            );

        }

        return (

            <ScrollView  style={HomeStyles.container}>
                <View style={HomeStyles.itemRow}>
                    {Items1}
                </View>

                <View style={HomeStyles.itemRow}>
                    {Items2}
                </View>
            </ScrollView>

        );

    },

});
var HomeStyles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        marginTop:20
    },
    itemRow:{
        flexDirection:'row',
        marginBottom:20,
    }
});

module.exports = Home;