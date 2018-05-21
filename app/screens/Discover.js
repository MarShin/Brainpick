/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import Background from '../components/Background/';
import DiscoverHeader from '../components/DiscoverHeader';
import TaskList from '../components/TaskList';

type Props = {
  navigation: any
};

class Discover extends Component<Props> {
  render() {
    return (
      <Background backgroundColor="#F5F8FA">
        <StatusBar backgroundColor="#F5F8FA" translucent />
        <DiscoverHeader />
        <TaskList />
      </Background>
    );
  }
}

export default Discover;
