//import liraries
var React = require('react');
var ReactNative = require('react-native');

var {
    Image
} = ReactNative;

// create a component

var TabBarItem = React.createClass({
    render: function () {
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
        return (
            <Image
                source={this.props.focused
                    ? selectedImage
                    : this.props.normalImage}
                style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
            />
        );
    }

});

//make this component available to the app
export default TabBarItem;
