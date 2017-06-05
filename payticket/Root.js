var React  = require("react");

var ReactNative = require("react-native");

var {
    StackNavigator,
    TabNavigator,
    TabBarBottom
} = require("react-navigation");

var SearchView = require('./search/Search');
var NotifyView = require('./notify/Notify');
var MeView = require('./me/Me');
var TabBarItem = require('./widget/TabBarItem');
var Ionicons = require('react-native-vector-icons/Ionicons')

var {
    View,
    Text,
    Image
}  = ReactNative;


var RootView = React.createClass({
    render: function () {
        // return (
        //     <View>
        //         <Text>PayTicket</Text>
        //     </View>
        // );

        return <RouteView/>;
    }
});

const HomeView = TabNavigator(
    {
        //搜索
        Search: {
            screen: SearchView,
            navigationOptions: {
                title:'查询罚单',
                tabBarLabel:'Search',
                tabBarIcon:({ focused, tintColor }) => (
                    <Image
                        source={require('../img/search_icon.png')}
                    />
                )
            }
        },

        //通知
        Notify: {
            screen: NotifyView,
            navigationOptions: {
                title:'通知',
                tabBarIcon:({ focused, tintColor }) => (
                    <Image
                        source={require('../img/notifications_icon.png')}
                    />
                )
            }
        },


        //我
        Me: {
            screen: MeView,
            navigationOptions: {
                title:'我',
                tabBarIcon:({ focused, tintColor }) => (
                    <Image
                        source={require('../img/me_icon.png')}
                    />
                )
            }
        },

    },
    {

    }
);

const RouteView = StackNavigator(
    {
        Tab: { screen: HomeView },
    },
    {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
        },
    }
);

module.exports = RootView;
