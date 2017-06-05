var React  = require("react");

var ReactNative = require("react-native");

var {
    StackNavigator,
    TabNavigator,
    TabBarBottom
} = require("react-navigation");

var SearchView = require('./search/SearchView');
var NotifyView = require('./notify/NotifyView');
var MeView = require('./me/MeView');
var LoginView = require('./login/LoginView');

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
                headerTitle:'通知中心',
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
        initialRouteName:'Me', //默认显示界面
        swipeEnabled:true,
        animationEnabled:true,
        tabBarOptions: {
            labelStyle: {
                fontSize: 14, // 文字大小
            },
        }

    }
);

const RouteView = StackNavigator(
    {
        Login: {
            screen: LoginView,
            navigationOptions: {
                header:null,
            }
        },

        Tab: {
            screen: HomeView,
            navigationOptions: {
                headerLeft:null,
            }
        },
    },
    {
    }
);

module.exports = RootView;
