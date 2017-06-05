var ReactNative = require('react-native');
var React = require('react');


var {
    View,
    Text
} = ReactNative;


var DeleteUser = React.createClass({

    render:function() {
        return(
            <View>
                <Text>我是删除用户</Text>
            </View>
        );
    }

});

module.exports = DeleteUser;