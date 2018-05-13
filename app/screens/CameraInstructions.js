import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Steps } from '../components/Steps';

// const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
// const ICON_COLOR = '#868686';
// const ICON_SIZE = 23;
const firstTime = true;

class CameraInstructions extends Component {
    handlePress = () => {
        console.log('row press');
        // just go back to the previous stacked screen, no object passed
        // this.props.navigation.goBack(null);
    };

    render() {
        return (
            <Steps />
            // <View style={{ flex: 1 }}>
            //     <StatusBar translucent={false} barStyle="default" />
            // </View>
        );
    }
}
export default CameraInstructions;
