// @flow
import * as React from 'react';
import { StatusBar } from 'react-native';

import Background from '../components/Background';
import { PageHeading } from '../components/Headings';
import { Steps } from '../components/Steps';

class CameraInstructions extends React.Component {
  handlePress = () => {
    console.log('row press');
  };

  render() {
    return (
      <Background backgroundColor="#FAFAFA">
        <StatusBar backgroundColor="#FAFAFA" translucent />
        <PageHeading>Settings</PageHeading>
        <Steps navigation={this.props.navigation} />
      </Background>
    );
  }
}
export default CameraInstructions;
