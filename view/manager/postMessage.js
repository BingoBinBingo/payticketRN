var ReactNative = require('react-native');
var React = require('react');


var {
    View,
    Text
} = ReactNative;


var PostMessage = React.createClass({

    render:function() {
        return(
            <View>
                <Text>我是发布公告</Text>
            </View>
        );
    }

});

module.exports = PostMessage;