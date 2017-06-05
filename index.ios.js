/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';


//noinspection JSUnresolvedVariable
// import { Component} from 'react';
//noinspection JSUnresolvedVariable

var {Component} = require('react');  //这个不能使用 无 花括号 的
var React = require('react');
var ReactNative = require('react-native');
var HomeView = require('./view/home');
var MessageView = require('./view/message');
var ManagerView = require('./view/manager');
var ReduxDemoView = require('./view/redux-demo/reduxDemo');
var Util = require('./view/util');
var Redux = require('redux');
var ReactRedux = require('react-redux');
var ReactNativeDep = require('react-native-deprecated-custom-components');
var PayTicketView = require('./payticket/Root');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    DatePickerIOS,
    SwitchIOS, PixelRatio, TextInput, AlertIOS, ActionSheetIOS, NetInfo, VibrationIOS, Image,
    StatusBarIOS,
    TabBarIOS,
    NavigatorIOS
} = ReactNative;


var Swiper = require('react-native-swiper');
// var Modal = require('react-native-modal');  //模状框
var AdSupportIOS = require('AdSupportIOS');

var Header = require('./view/HeaderView');
import ImportantNews from './view/InportantNews';
var Geolocatiion = require('Geolocation');


var HomeTitle = 'HomeView';
var NewsTitle = 'news';
var ManagerTitle = 'contact';
var AboutTitle = 'about';

var HomeTitleCN = '主页';
var NewsTitleCN = '公告';
var ManagerTitleCN = '管理';
var AboutTitleCN = '关于';

var Address = React.createClass({


    getInitialState() {
      return {
          selectedTab: ManagerTitle,
          isLogined: 1
          // selectedTab: HomeTitle
      }
    },

    _addNavigator: function (cmp, title) {
        var NavigatorSize  = {
            width: Util.size.width,
            height:Util.size.height
        };

        return(
            <NavigatorIOS
                style={[NavigatorSize, {backgroundColor:'#f00'}]}
                barTintColor='#36363b'
                titleTextColor="#fff"
                tintColor="#fff"
                translucent={false}
                initialRoute={{
                    component: cmp,
                    title: title,
                    passProps: {
                        data:"dsd"
                    }
                }}
            />
        );
    },

    _selectTab: function(tabName){
        this.setState({
            selectedTab: tabName
        });
    },

    render: function () {
        if(this.state.isLogined == 1) {
            return (
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text>登录中....</Text>
                </View>

            );
        } if(this.state.isLogined == 2) {
            return (
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text>成功登录</Text>
                </View>

            );
        } else
        return (

            <View style={ {flex:1} }>
                <TabBarIOS
                    tintColor="#25A827"
                    barTintColor="#f7f7f7"
                    translucent={true}
                >

                    <TabBarIOS.Item
                        style={bingoStyle.tabBarItemStyle}
                        title="首页"
                        selected={this.state.selectedTab === HomeTitle}
                        onPress={this._selectTab.bind(this, HomeTitle)}
                        systemIcon="contacts"
                    >

                        {this._addNavigator(HomeView, HomeTitleCN)}

                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        style={bingoStyle.tabBarItemStyle}
                        title="公告"
                        selected={this.state.selectedTab === NewsTitle}
                        onPress={this._selectTab.bind(this, NewsTitle)}
                        systemIcon="favorites"
                    >
                        {this._addNavigator(MessageView, NewsTitleCN)}
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        style={bingoStyle.tabBarItemStyle}
                        title="联系人"
                        selected={this.state.selectedTab === ManagerTitle}
                        onPress={this._selectTab.bind(this, ManagerTitle)}
                        systemIcon="history"
                    >
                        {this._addNavigator(ManagerView, ManagerTitleCN)}
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        style={bingoStyle.tabBarItemStyle}
                        title="关于"
                        selected={this.state.selectedTab === AboutTitle}
                        onPress={this._selectTab.bind(this, AboutTitle)}
                        systemIcon="more"
                    >
                        <ReduxDemoView/>
                        {/*<HomeView/>*/}
                        {/*<Text>{AboutTitle}</Text>*/}
                    </TabBarIOS.Item>

                </TabBarIOS>


            </View>

        );

    },

    componentDidMount: function () {
      setTimeout(() =>{
          this.setState({isLogined:2});
      }, 1000);
        setTimeout(() =>{
            this.setState({isLogined:3});
        }, 2000);
    },


});



class milkteashop extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.welcome} onPress={ () => {alert("我是IOS应用")}}>
            Welcome to React
            Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>

    );
  }
}

var BingoApp = React.createClass({
    test3Press: function () {
        let [a, b=2, c=8] = [1];
        // let [a, b, c] = [222, 2, 31];
        return a + b - c;
    },
    showLayout: function (obj) {
        alert(obj.targetX);
    },
    onlyAlertFun2: function() {
        AlertIOS.prompt("答案", "默认答案",
            [{ text:'取消', onPress:function() {}},
                { text:'取消1', onPress:function() {
                    alert("dsd");
                }}])
    },

    tipAction: function() {
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options:['111', '222', '333', '4'],
                cancelButtonIndex:1,  //取消按钮的位置
                destructiveButtonIndex:3, //不用使用按钮的位置
                title:'电量查询',
                message:'你好'
            }
            , function (index) {
                alert("当前的状态:" + NetInfo.fetch().done(function (isConnected) {
                        alert("是否连接:" + isConnected);
                    }));
            });
    },

    shareAction: function() {
        ActionSheetIOS.showShareActionSheetWithOptions(
            {
                url:'http://www.baidu.com',
                message:"进行分享",
                subject:'dsd',
            }
            , function (index) {alert(index); }
            , function (index) {alert(index); });
    },

    onlyAlertFun: function() {
        AlertIOS.alert('你好', "你灾民",
            [
                {
                    text:"取消",
                    onPress: function() {

                    }
                },
                {
                    text:"取消1",
                    onPress: function() {

                    }
                },{
                text:"取消1",
                onPress: function() {

                }
            },{
                text:"取消1",
                onPress: function() {

                }
            },{
                text:"取消1",
                onPress: function() {

                }
            }


            ]
        )
    },

    vibrationAction : function () {
        VibrationIOS.vibrate();
    },

    geolocationAction : function() {
        Geolocatiion.getCurrentPosition(
          function (succData) {
              VibrationIOS.vibrate();
              alert(JSON.stringify(succData));
          },
            function (failData) {
                alert("位置获取失败");
            }

        );

    },

    setTimeOutAction:function () {
        setTimeout(()=> {VibrationIOS.vibrate();alert("我是5秒后被执行")}, 5000);
    },

    setIntervalAction() {

    },

    requestAnimationFrameAction: function () {

    },

    render: function () {
        return <View style={bingoStyle.container}>
            <View style={bingoStyle.childView}>

                <Text style={{marginTop:40}}
                      onPress={this.setTimeOutAction}
                >
                    我是按钮={this.test3Press()}
                </Text>

            </View>
        </View>
    }

});


var BingoTitleApp = React.createClass({

    render: function () {
        return <ImportantNews news={['dsds', 'sdsd', '12']}/>;
    }

});

var BingoSwiper = React.createClass({

    render:function() {

        return(
        <Swiper showsButtons={false}
                showsVerticalScrollIndicator={false}
                showsPagination={true}
                bounces={true}
                scrollsToTop={true}
                loop={true}
                activeDotColor={'black'}
                autoplay={true}>
            <View style={bingoStyle.swiperItemStyle}>
                <Text style={bingoStyle.swiperTextStyle}>第一张</Text>
                <Image source={require('./img/widget_contact_edit_change_bg_s.png')}/>
            </View>

            <View style={bingoStyle.swiperItemStyle}>
                <Text style={bingoStyle.swiperTextStyle}>第二张</Text>
                <Image source={require('./img/widget_contact_edit_del_bg_n.png')}/>
            </View>

            <View style={bingoStyle.swiperItemStyle}>
                <Text style={bingoStyle.swiperTextStyle}>第三张</Text>
                <Image source={require('./img/widget_contact_edit_change_bg_s.png')}/>
            </View>
        </Swiper>);

    }

});

var BingoModal = React.createClass({

    getInitialState:function() {

        return { isModalOpen: false};
    },

    closeModal:function() {
        this.setState({isModalOpen:false});
    },

    openModal:function() {
        this.setState({isModalOpen:true});
    },

    render:function() {
        return (

        <View>
            <Text onPress={() => this.openModal()}>
                预定机票
            </Text>

            <Modal isVisible={this.state.isModalOpen} >
                <View>
                    <Text>我是模态框的内容</Text>
                </View>
            </Modal>

        </View>

        );
    }


});


//括号中的是 Javascript字面量对象
const bingoStyle = StyleSheet.create({
    tabBarItemStyle: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    swiperItemStyle: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    swiperTextStyle: {
        color:'#0f0'
    },

    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'red',
        borderWidth:33,
        flexDirection:'row'
    },

    childView:{
        flex:1,
        borderColor:'green',
        borderWidth:2,
        margin:1,
        alignSelf:'center',
        flexDirection:'column',
        alignItems:'center',
        borderBottomColor:'red',
        borderLeftColor:'black',
        borderRadius:11,
        height:54,
        justifyContent:'center',
        marginLeft:12,
        marginRight:12,
        borderLeftWidth:1/PixelRatio.get()
    }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  //主轴
    alignItems: 'center',      //副轴
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    color:'red',
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  },
  gray: {
    backgroundColor:"red"
  },
  instructions: {
    textAlign: 'right',
    marginBottom: 5,
    color:'#333444'
  },
});


// AppRegistry.registerComponent('milkteashop', () => milkteashop);
// AppRegistry.registerComponent('milkteashop', () => BingoModal);
AppRegistry.registerComponent('contact', () => PayTicketView);
// AppRegistry.registerComponent('contact', () => Address);
// AppRegistry.registerComponent('milkteashop', () => BingoSwiper);
// AppRegistry.registerComponent('milkteashop', () => AnimationView);
// AppRegistry.registerComponent('milkteashop', () => BingoApp);
// AppRegistry.registerComponent('milkteashop', () => BingoTitleApp);
