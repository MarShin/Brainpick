import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';

import { Container } from '../components/Container';

class Contribution extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="dark-content" />
        <Text> coming soon </Text>
      </Container>
    );
  }
}

export default Contribution;
